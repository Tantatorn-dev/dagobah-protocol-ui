import { useCall, useContractFunction } from "@usedapp/core";
import { BigNumberish, Contract } from "ethers";
import { DagobahRegistry } from "gen/types";
import { useCallback, useMemo } from "react";
import { CONTRACT_ADDRESS } from "../address";
import { interfaces } from "../interfaces";

const CONTRACT = new Contract(
  CONTRACT_ADDRESS,
  interfaces.positionInterface
) as DagobahRegistry;

function useRegistry() {
  const { send, state, resetState } = useContractFunction(CONTRACT, "issue");

  const register = useCallback(
    async (dealId: BigNumberish) => {
      try {
        await CONTRACT.estimateGas.issue(dealId);
        send(dealId);
      } catch (e) {
        console.log(e);
      }
    },
    [send]
  );
  return { send, state, resetState, register };
}

export default useRegistry;
