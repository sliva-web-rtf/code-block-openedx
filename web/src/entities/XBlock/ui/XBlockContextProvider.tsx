import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { xBlockContext } from "../libs/xBlockContext";
import { IXBlockContext } from "../types/IXBlockContext";
import { DEFAULT_URL_MOCK, DEFAULT_URL_MOCK_MAP } from "../mocks/contextMock";

export const XBlockContextProvider: FC<PropsWithChildren> = (props) => {
  const [context, setContext] = useState<IXBlockContext>({});

  useEffect(() => {
    if (import.meta.env.PROD) {
      const listener = (event: MessageEvent<Required<IXBlockContext>>) => {
        console.log(event)
        setContext(event.data);
      };
      window.addEventListener("message", listener);
  
      return () => window.removeEventListener("message", listener);
    }
  }, []);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setContext({
        infoUrl: DEFAULT_URL_MOCK_MAP[DEFAULT_URL_MOCK.INFO_URL],
        baseUrl: DEFAULT_URL_MOCK_MAP[DEFAULT_URL_MOCK.BASE_URL]
      })
    }
  }, [])

  return <xBlockContext.Provider value={context} {...props} />;
};
