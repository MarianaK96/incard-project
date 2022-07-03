import Link from "next/link";
import { Text } from "src/common_components/atoms";

interface DataBoxBodyProps {
  title: string;
  figure: number;
  figureTwo?: number;
  logo: JSX.Element;
}

const DataBoxBody: React.FC<DataBoxBodyProps> = ({
  title,
  figure,
  figureTwo,
  logo,
}) => {
  const calculatePercentage = (currAmount: number, oldAmount: number) => {
    const diff = currAmount - oldAmount;
    const percent = Math.floor((diff / oldAmount) * 100);
    return percent;
  };
  return (
    <>
      <div className="rounded-b-md bg-dark-blue-600 w-full justify-between h-32">
        <div className="flex justify-around h-full">
          <div className="flex flex-col justify-around h-full">
            <Text as="p" textStyle="body" className="text-white">
              {title}
            </Text>
            <Text as="p" textStyle="body" bold className="text-white text-xl">
              {figure && figure.toString()}
            </Text>
            <Text
              as="p"
              textStyle="body"
              className="text-white text-xl text-success"
            >
              {figureTwo && calculatePercentage(figure, figureTwo)}
            </Text>
          </div>
          <div>{logo}</div>
        </div>
      </div>
    </>
  );
};

export default DataBoxBody;

//logo to the right
