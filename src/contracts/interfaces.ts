import { ethers } from "ethers";
import DGBPosition from './abis/DagobahPosition.json'
import DGBReg from './abis/DagobahRegistry.json'

export const interfaces = {
    positionInterface: new ethers.utils.Interface(DGBPosition.abi),
    registryInterface: new ethers.utils.Interface(DGBReg.abi)
}