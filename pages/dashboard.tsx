import React, { Context } from "react";
import { DashboardPage } from "src/components/templates";
import { getGraphData } from "src/utils/api";

interface dashboardProps {
  data: any;
}

const dashboard: React.FC<dashboardProps> = ({ data }) => {
  // TODO - Incase more components need access to this data - avoid prop drilling
  // const DashboardContext = React.createContext({});
  // const data = getGraphData();

  return (
    // <DashboardContext.Provider value={data}>
    <DashboardPage data={data} />
    // </DashboardContext.Provider>
  );
};

export default dashboard;

export async function getServerSideProps() {
  const data = getGraphData();
  return { props: { data } };
}
