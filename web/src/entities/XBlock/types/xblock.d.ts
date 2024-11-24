import { IXBlockRuntime } from "./IXBlockRuntime";

export declare global {
  export interface Window {
    initApp: InitAppType;
  }
}

type InitAppType = (runtime?: IXBlockRuntime, element?: HTMLElement) => void