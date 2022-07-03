import Link from "next/link";
import { Text } from "src/common_components/atoms";
import { GrFormAdd } from "react-icons/gr";

interface DataBoxTitleProps {
  title: string;
  action: string;
}

const DataBoxTitle: React.FC<DataBoxTitleProps> = ({ title, action }) => {
  return (
    <>
      <div className="rounded-t-md bg-dark-blue-300 w-full flex justify-around w-full">
        <Text as="p" textStyle="body" className="text-white">
          {title}
        </Text>
        <Link href={"/"}>
          <a className="flex">
            <Text as="a" textStyle="body" className="text-white">
              <GrFormAdd width="24" height="24" color="white" />
              {action}
            </Text>
          </a>
        </Link>
      </div>
    </>
  );
};

export default DataBoxTitle;
