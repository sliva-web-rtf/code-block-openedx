import { useContext } from "react";
import { xBlockContext } from "../libs/xBlockContext";

export const useXBlockContext = () => {
  return useContext(xBlockContext);
};
