import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { DataBoxTitle } from "src/common_components/atoms";
import { text } from "src/utils/text";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

interface LineGraphProps {
  data: string[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const labels = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return (
    <div className="flex flex-col items-center justify-center  bg-dark-blue-600">
      <DataBoxTitle
        title={text.dashboard.balanceHistory.title}
        actionOne={text.dashboard.balanceHistory.actionOne}
        actionTwo={text.dashboard.balanceHistory.actionTwo}
        type={"accountHistory"}
      />
      {data && (
        <div className="h-full w-full p-6">
          <Line
            data={{
              labels: labels.map((month) =>
                month.replace(/^\w/, (c) => c.toUpperCase())
              ),
              datasets: [
                {
                  // label: "My First Dataset",
                  data,
                  // fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.6,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LineGraph;
