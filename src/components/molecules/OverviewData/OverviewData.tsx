import { useEffect } from "react";
import { getGraphData } from "src/utils/api";
import { text } from "src/utils/text";
import LogoSmall from "../../../icons/incard-icon.svg";
import { DataBoxTitle } from "src/common_components/atoms";
import { DataBoxBody } from "src/common_components/atoms";

interface OverviewDataProps {
  overviewData: {
    balance: number;
    oldBalance: number;
  };
}

const OverviewData: React.FC<OverviewDataProps> = ({ overviewData }) => {
  return (
    <div className="w-full h-full">
      <DataBoxTitle
        title={text.dashboard.overview.title}
        actionOne={text.dashboard.overview.actionText}
        type={"accountHistory"}
      />
      <div className="flex flex-row">
        <DataBoxBody
          title={text.dashboard.activityOverview.revenue}
          figure={overviewData.balance}
          figureTwo={overviewData.oldBalance}
        />
      </div>
    </div>
  );
};

export default OverviewData;
