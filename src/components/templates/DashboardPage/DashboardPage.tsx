import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Layout } from "src/common_components/organisms";
import Logo from "../../../icons/logo.svg";
import { getGraphData } from "src/utils/api";
import { DashboardData } from "src/components/organisms";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [overviewData, setOverviewData] = useState({});
  useEffect(() => {
    const data = getGraphData();
    setOverviewData(data.body.data.overview);
  }, []);
  return (
    <>
      <Layout>
        <Link href="/">
          <Logo className="cursor-pointer" />
        </Link>
        <div>
          <DashboardData overviewData={overviewData} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
