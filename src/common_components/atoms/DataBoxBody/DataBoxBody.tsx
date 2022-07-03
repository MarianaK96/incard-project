import Link from "next/link";
import { Text } from "src/common_components/atoms";

interface DataBoxBodyProps {
  title: string;
  figure: number;
  figureTwo?: number;
  logo: any;
  //change this
}

const DataBoxBody: React.FC<DataBoxBodyProps> = ({
  title,
  figure,
  figureTwo,
  logo,
}) => {
  return (
    <>
      <div className="rounded-b-md bg-dark-blue-600 w-full">
        {logo}
        <Text as="p" textStyle="body">
          {title}
        </Text>
        <Text as="p" textStyle="body">
          {figure.toString()}
        </Text>
        <Text as="p" textStyle="body">
          {figureTwo?.toString()}
        </Text>
      </div>
    </>
  );
};

export default DataBoxBody;
