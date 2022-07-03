import { useEffect } from "react";
import { DataBox } from "src/common_components/molecules";
import { getGraphData } from "src/utils/api";
import { text } from "src/utils/text";

interface OverviewDataProps {
  overviewData: {
    balance: number;
    oldBalance: number;
  };
}

const OverviewData: React.FC<OverviewDataProps> = ({ overviewData }) => {
  return (
    <>
      <DataBox
        title={text.dashboard.overview.title}
        action={text.dashboard.overview.actionText}
        figure={overviewData.balance}
        figureTwo={overviewData.oldBalance}
        logo={undefined}
        bodyTitle={text.dashboard.overview.bodyTitle}
      />
    </>
  );
};

export default OverviewData;
