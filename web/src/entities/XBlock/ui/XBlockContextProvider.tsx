import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { xBlockContext } from "../libs/xBlockContext";
import { IXBlockContext } from "../types/IXBlockContext";

export const XBlockContextProvider: FC<PropsWithChildren> = (props) => {
  const [context, setContext] = useState<IXBlockContext>({});

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!context.baseUrl || !context.infoUrl) {
      intervalId = setInterval(() => {
        const xblockProxy = window.xblockProxy;
        if (!xblockProxy) {
          return;
        }
        setContext(xblockProxy);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [context]);

  return <xBlockContext.Provider value={context} {...props} />;
};
