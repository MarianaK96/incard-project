import Link from "next/link";
import { useEffect, useState } from "react";
import { Text } from "src/common_components/atoms";
import { classNames } from "src/utils/functions";
import AddIcon from "../../../icons/add.svg";

interface DataBoxBodyProps {
  title: string;
  figure: number;
  figureTwo?: number;
  logo?: JSX.Element;
}

const DataBoxBody: React.FC<DataBoxBodyProps> = ({
  title,
  figure,
  figureTwo,
  logo,
}) => {
  const [percentColor, setPercentColor] = useState<string>("text-success");
  const calculatePercentage = (currAmount: number, oldAmount: number) => {
    const diff = currAmount - oldAmount;
    const percent = Math.floor((diff / oldAmount) * 100);
    return percent;
  };

  const setColor = () => {
    if (figureTwo && figureTwo > figure) setPercentColor("text-error");
  };

  useEffect(() => {
    setColor();
  }, [figure, figureTwo]);
  return (
    <>
      <div className="rounded-b-md bg-dark-blue-600 w-full justify-between h-32">
        <div className="flex justify-start h-full px-8">
          <div className="flex flex-col justify-around h-full">
            <Text as="p" textStyle="body" className="text-grey">
              {title}
            </Text>
            <Text as="p" textStyle="body" bold className="text-white text-xl">
              £{" "}
              {figure &&
                figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
            <Text
              as="p"
              textStyle="body"
              className={classNames(percentColor, " text-xl")}
            >
              <span className="flex items-center w-11 justify-between">
                {figureTwo && figureTwo > figure ? "" : <AddIcon />}
                {figureTwo && calculatePercentage(figure, figureTwo)}%
              </span>
            </Text>
          </div>
          <div className="ml-auto">{logo}</div>
        </div>
      </div>
    </>
  );
};

export default DataBoxBody;
