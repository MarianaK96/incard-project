import React from "react";
import { OverviewData } from "src/components/molecules";

interface DashboardDataProps {
  overviewData: {
    balance: number;
    oldBalance: number;
  };
}

const DashboardData: React.FC<DashboardDataProps> = ({ overviewData }) => {
  return (
    <>
      <div>
        <OverviewData overviewData={overviewData} />
      </div>
    </>
  );
};

export default DashboardData;
