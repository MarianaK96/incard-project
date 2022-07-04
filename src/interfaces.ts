export interface IOtherAccountsData {
  [key: string]: {
    name: string;
    sum: number;
  };
}

export interface IActivity {
  revenue: number;
  oldRevenue: number;
  expenses: number;
  oldExpenses: number;
}

export interface IAllData {
  data: {
    body: {
      data: {
        overview: {
          balance: number;
          oldBalance: number;
        };
        otherAccounts: IOtherAccountsData;
        activity: IActivity;
        balanceHistory: number[];
      };
    };
  };
}

export type IAuthContext = {
  authState: {
    token: string | null | undefined | void;
  };
  setAuthState: (userAuthInfo: string) => void;
  logout: () => void;
  isUserAuthenticated: () => boolean;
};
