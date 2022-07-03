import Link from "next/link";
import { Text } from "src/common_components/atoms";
import AddIcon from "../../../icons/add.svg";

interface DataBoxTitleProps {
  title: string;
  actionOne: string;
  actionTwo?: string;
  type: string;
}

const DataBoxTitle: React.FC<DataBoxTitleProps> = ({
  title,
  actionOne,
  actionTwo,
  type,
}) => {
  return (
    <>
      <div className="rounded-t-md bg-dark-blue-300 w-full flex justify-between w-full p-4 px-8 items-center">
        <Text
          as="p"
          textStyle="body"
          className="text-white uppercase text-grey"
        >
          {title}
        </Text>
        {type === "overview" ? (
          <Link href={"/"}>
            <a className=" flex items-center">
              <AddIcon className="text-white mx-3" />
              <Text as="p" textStyle="body" className="text-white">
                {actionOne}
              </Text>
            </a>
          </Link>
        ) : (
          <>
            <Link href={"/"}>
              <a className="flex items-center ">
                <AddIcon className="text-white mx-3" />
                <Text as="p" textStyle="body" className="text-white">
                  {actionOne}
                </Text>
              </a>
            </Link>
            <span className="hidden md:visible">
              <Link href={"/"}>
                <a className="flex items-center">
                  <AddIcon className="text-white mx-3" />
                  <Text as="p" textStyle="body" className="text-white">
                    {actionTwo}
                  </Text>
                </a>
              </Link>
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default DataBoxTitle;
