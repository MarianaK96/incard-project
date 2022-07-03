import React from "react";
import { OtherAccountsData, OverviewData } from "src/components/molecules";
import { IOtherAccountsData } from "src/interfaces";

interface DashboardDataProps {
  overviewData: {
    balance: number;
    oldBalance: number;
  };
  accountsData: IOtherAccountsData;
}

const DashboardData: React.FC<DashboardDataProps> = ({
  overviewData,
  accountsData,
}) => {
  return (
    <>
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-full md:col-span-4">
          <OverviewData overviewData={overviewData} />
        </div>
        <div className="col-span-full md:col-span-4 md:row-start-2">
          <OtherAccountsData accountsData={accountsData} />
        </div>
        <div className="col-span-full md:col-start-5 md:col-span-7 bg-blue-200 md:h-full">
          {/* Activity */}
        </div>
        <div className="col-span-full md:col-start-5 md:col-span-7 bg-blue-200 md:h-full"></div>
      </section>
    </>
  );
};

export default DashboardData;
