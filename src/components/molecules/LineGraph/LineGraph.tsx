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
  data: number[];
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
    <div className="flex flex-col items-center justify-center bg-dark-blue-600 mb-8 md:mb-0 pb-3">
      <DataBoxTitle
        title={text.dashboard.balanceHistory.title}
        actionOne={text.dashboard.balanceHistory.actionOne}
        actionTwo={text.dashboard.balanceHistory.actionTwo}
        type={"accountHistory"}
      />
      {data && (
        <div className="h-full w-full p-6 rounded-b-md">
          <Line
            data={{
              labels: labels.map((month) =>
                month.replace(/^\w/, (c) => c.toUpperCase())
              ),
              datasets: [
                {
                  data,
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
