import { useCall, useContractFunction, useEthers } from "@usedapp/core";
import { BigNumberish, Contract, ethers } from "ethers";
import { DagobahRegistry } from "gen/types";
import { useCallback, useMemo } from "react";
import { CONTRACT_ADDRESS } from "../address";
import { interfaces } from "../interfaces";

function useRegister() {
  const { library } = useEthers();
  const CONTRACT = new Contract(
    CONTRACT_ADDRESS,
    interfaces.registryInterface,
    (library as ethers.providers.JsonRpcProvider)?.getSigner()
  ) as DagobahRegistry;

  const { send, state, resetState } = useContractFunction(CONTRACT, "issue");

  const register = useCallback(
    async (dealId: BigNumberish) => {
      try {
        await CONTRACT.estimateGas.issue(dealId, {});
        send(dealId);
      } catch (e) {
        console.log(e);
      }
    },
    [send]
  );
  return { send, state, resetState, register };
}

export default useRegister;
