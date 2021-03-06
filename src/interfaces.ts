export interface IOtherAccountsData {
  [key: string]: {
    currency: string;
    name: string;
    sum: number;
  };
}

export interface IBalanceHistoryData {
  [key: string]: string;
}

export interface IActivity {
  revenue: number;
  oldRevenue: number;
  expenses: number;
  oldExpenses: number;
}

export interface IAllData {
  data: {
    body: any;
    balanceHistory: number[];
    otherAccounts: IOtherAccountsData;
    acivity: IActivity;
    overview: {
      balance: number;
      oldBalance: number;
    };
  };
}

export type IAuthContext = {
  authState: {
    token: string | null | undefined | void;
  };
  setAuthState: (userAuthInfo: string | undefined) => void;
  logout: () => void;
  isUserAuthenticated: () => boolean;
};
