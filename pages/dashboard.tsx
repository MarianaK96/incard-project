import React from "react";
import { useRouter } from "next/router";
import { DashboardPage } from "src/components/templates";
import { getGraphData } from "src/utils/api";
import { AuthProvider } from "src/context/auth-context";
import { IAllData } from "src/interfaces";

const dashboard: React.FC<IAllData> = ({ data }) => {
  // TODO - Incase more components need access to this data - avoid prop drilling
  // const DashboardContext = React.createContext({});
  // const data = getGraphData();
  return (
    // <DashboardContext.Provider value={data}>
    <AuthProvider>
      <DashboardPage data={data} />
    </AuthProvider>
    // </DashboardContext.Provider>
  );
};

export default dashboard;

export async function getServerSideProps() {
  const data = getGraphData();
  return { props: { data } };
}
