import { IXBlockContext } from "./IXBlockContext";

export declare global {
  export interface Window {
    initApp: InitAppType;
  }
}

type InitAppType = (data: Required<IXBlockContext>) => void