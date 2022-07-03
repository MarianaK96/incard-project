import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Layout } from "src/common_components/organisms";
import Logo from "../../../icons/logo.svg";
import { DashboardData } from "src/components/organisms";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({ data }) => {
  const { overview, otherAccounts, balanceHistory, activity } = data.body.data;

  console.log(" activity  =-=-: ", activity);
  return (
    <div className="bg-dark-blue-900">
      <Layout>
        <Link href="/">
          <a className="m-8">
            <Logo className="cursor-pointer" />
          </a>
        </Link>
        <div>
          <DashboardData
            overviewData={overview}
            accountsData={otherAccounts}
            balanceHistoryData={balanceHistory}
            activityData={activity}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
