import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "src/common_components/organisms";
import Logo from "../../../icons/logo.svg";
import { DashboardData } from "src/components/organisms";
import { AuthContext } from "src/context/auth-context";
import { Text } from "src/common_components/atoms";
import { text } from "src/utils/text";
import { IAllData } from "src/interfaces";

const DashboardPage: ({ data }: IAllData) => JSX.Element | undefined = ({
  data,
}: IAllData) => {
  const { overview, otherAccounts, balanceHistory, activity } = data.body.data;
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext?.isUserAuthenticated()) router.push("/login");
  }, []);

  if (!authContext?.isUserAuthenticated()) return;
  return (
    <div className="bg-dark-blue-900">
      <Layout>
        <div className="flex flex-row justify-between">
          <Link href="/">
            <a className="m-8">
              <Logo className="cursor-pointer" />
            </a>
          </Link>
          <Text
            as="p"
            onClick={() => {
              authContext?.logout();
              router.push("/login");
            }}
            className="text-white p-8 cursor-pointer"
            bold
          >
            {text.dashboard.logout}
          </Text>
        </div>
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

export default DashboardPage;
