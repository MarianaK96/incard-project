import { useEffect } from "react";
import { DataBoxTitle } from "src/common_components/atoms";
import CondensedDataBody from "src/common_components/atoms/CondensedDataBody";
import { getGraphData } from "src/utils/api";
import { text } from "src/utils/text";
import LogoSmall from "../../../icons/incard-icon.svg";
import { IOtherAccountsData } from "src/interfaces";

interface OtherAccountsDataProps {
  accountsData: IOtherAccountsData;
}

const OtherAccountsData: React.FC<OtherAccountsDataProps> = ({
  accountsData,
}) => {
  const accountTypeCollection = [];

  for (const accountType in accountsData) {
    accountTypeCollection.push(accountsData[accountType]);
  }

  return (
    <>
      <div>
        <DataBoxTitle
          title={text.dashboard.otherAccounts.title}
          actionOne={text.dashboard.otherAccounts.actionText}
          actionTwo={text.dashboard.otherAccounts.actionTextTwo}
          type={"otherAccounts"}
        />

        {accountTypeCollection.map((accType) => (
          <CondensedDataBody
            key={accType?.name}
            title={accType?.name}
            figure={accType?.sum}
            currency={accType?.currency}
            logo={<LogoSmall />}
          />
        ))}
      </div>
    </>
  );
};

export default OtherAccountsData;
