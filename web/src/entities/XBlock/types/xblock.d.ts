import { IXBlockContext } from "./IXBlockContext";

export declare global {
  export interface Window {
    xblockProxy?: IXBlockContext;
  }
}
