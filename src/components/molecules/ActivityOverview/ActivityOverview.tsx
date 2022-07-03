import React from "react";
import { DataBoxTitle } from "src/common_components/atoms";
import { DataBoxBody } from "src/common_components/atoms";
import { text } from "src/utils/text";
import { IActivity } from "src/interfaces";

const ActivityOverview: React.FC<IActivity> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col bg-dark-blue-600 h-full">
        <DataBoxTitle
          title={text.dashboard.activityOverview.title}
          actionOne={text.dashboard.activityOverview.actionOne}
          type={"accountHistory"}
        />
        <div className="flex flex-row">
          <DataBoxBody
            title={text.dashboard.activityOverview.revenue}
            figure={data.revenue}
            figureTwo={data.oldRevenue}
          />
          <DataBoxBody
            title={text.dashboard.activityOverview.expenses}
            figure={data.expenses}
            figureTwo={data.oldExpenses}
          />
        </div>
      </div>
    </>
  );
};

export default ActivityOverview;
