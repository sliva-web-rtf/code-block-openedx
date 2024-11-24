import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { xBlockContext } from "../libs/xBlockContext";
import { IXBlockContext } from "../types/IXBlockContext";
import { DEFAULT_URL_MOCK, DEFAULT_URL_MOCK_MAP } from "../mocks/contextMock";

export const XBlockContextProvider: FC<PropsWithChildren> = (props) => {
  const [context, setContext] = useState<IXBlockContext>({});

  useEffect(() => {
    window.initApp = (runtime, element) => {
      setContext({ runtime, element });
      window.initApp = () => {};
    };
  }, []);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setContext({
        element: document.createElement("div"),
        runtime: {
          handlerUrl: (_element, key) =>
            DEFAULT_URL_MOCK_MAP[key as DEFAULT_URL_MOCK],
        },
      });
      window.initApp = () => {};
    }
  }, []);

  return <xBlockContext.Provider value={context} {...props} />;
};
