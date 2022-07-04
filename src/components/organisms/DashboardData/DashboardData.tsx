import React from "react";
import { OtherAccountsData, OverviewData } from "src/components/molecules";
import {
  IOtherAccountsData,
  IBalanceHistoryData,
  IActivity,
} from "src/interfaces";
import { LineGraph, ActivityOverview } from "src/components/molecules";

interface DashboardDataProps {
  overviewData: {
    balance: number;
    oldBalance: number;
  };
  accountsData: IOtherAccountsData;
  balanceHistoryData: number[];
  activityData: IActivity;
}

const DashboardData: React.FC<DashboardDataProps> = ({
  overviewData,
  accountsData,
  balanceHistoryData,
  activityData,
}) => {
  return (
    <>
      <section className="px-8 md:px-20 flex justify-between flex-col lg:px-0 lg:grid lg:grid-cols-12 gap-5 pb-1">
        <div className="w-full col-span-full md:col-span-4">
          <OverviewData overviewData={overviewData} />
        </div>
        <div className="col-span-full md:col-span-4 md:row-start-2">
          <OtherAccountsData accountsData={accountsData} />
        </div>
        <div className="col-span-full md:col-start-5 md:col-span-8 md:h-full">
          <ActivityOverview data={activityData} />
        </div>
        <div className="col-span-full md:col-start-5 md:col-span-8 md:h-full mb-5">
          <LineGraph data={balanceHistoryData} />
        </div>
      </section>
    </>
  );
};

export default DashboardData;
