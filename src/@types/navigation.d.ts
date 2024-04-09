export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      registration: undefined;
      arrival: {
        id: string;
      };
    }
  }
}


type NavigateParams = {
  home: undefined,
  registration: undefined,
  arrival: { id: string },
};

type ScreenName = keyof NavigateParams;