import React from "react";
import { DashboardPage } from "src/components/templates";
import { getGraphData } from "src/utils/api";
import { AuthProvider } from "src/context/auth-context";
import { IAllData } from "src/interfaces";

const dashboard: React.FC<IAllData> = ({ data }) => {
  return (
    <AuthProvider>
      <DashboardPage data={data} />
    </AuthProvider>
  );
};

export default dashboard;

export async function getServerSideProps() {
  const data = getGraphData();
  return { props: { data } };
}
