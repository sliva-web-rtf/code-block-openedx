import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { xBlockContext } from "../libs/xBlockContext";
import { IXBlockContext } from "../types/IXBlockContext";
import { DEFAULT_URL_MOCK, DEFAULT_URL_MOCK_MAP } from "../mocks/contextMock";

export const XBlockContextProvider: FC<PropsWithChildren> = (props) => {
  const [context, setContext] = useState<IXBlockContext>({});

  useEffect(() => {
    if (import.meta.env.DEV && (!context.baseUrl || !context.infoUrl)) {
      setContext({
        baseUrl: DEFAULT_URL_MOCK_MAP[DEFAULT_URL_MOCK.BASE_URL],
        infoUrl: DEFAULT_URL_MOCK_MAP[DEFAULT_URL_MOCK.INFO_URL],
        patchInfoUrl: DEFAULT_URL_MOCK_MAP[DEFAULT_URL_MOCK.PATCH_INFO_URL]
      });
    }
  }, [context]);

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
