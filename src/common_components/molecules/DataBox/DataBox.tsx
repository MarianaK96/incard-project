import React from "react";
import { DataBoxBody, DataBoxTitle } from "src/common_components/atoms";

interface DataBoxProps {
  title: string;
  action: string;
  figure: number;
  logo: SVGElement;
  figureTwo?: number;
  bodyTitle: string;
}

const DataBox: React.FC<DataBoxProps> = ({
  title,
  action,
  figure,
  logo,
  figureTwo,
  bodyTitle,
}) => {
  // console.log(" action : ", action);
  return (
    <>
      <div>
        data box
        <DataBoxTitle title={title} actionOne={action} type={"overview"} />
        {/* <DataBoxBody
          title={bodyTitle}
          figure={figure}
          logo={logo}
          figureTwo={figureTwo}
        /> */}
      </div>
    </>
  );
};

export default DataBox;
