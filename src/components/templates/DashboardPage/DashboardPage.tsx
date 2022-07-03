import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Layout } from "src/common_components/organisms";
import Logo from "../../../icons/logo.svg";
import { DashboardData } from "src/components/organisms";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const data = { props };
  const [overviewData, setOverviewData] = useState({});
  const [accountsData, setAccountsData] = useState({});

  useEffect(() => {
    const dashboardData = data.props.data.body.data;
    setOverviewData(dashboardData.overview);
    setAccountsData(dashboardData.otherAccounts);
  }, []);

  return (
    <>
      <Layout>
        <Link href="/">
          <a className="m-8">
            <Logo className="cursor-pointer" />
          </a>
        </Link>
        <div>
          <DashboardData
            overviewData={overviewData}
            accountsData={accountsData}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
