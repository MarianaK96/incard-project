import { Text } from "src/common_components/atoms";

interface CondensedDataBodyProps {
  title: string;
  figure: number;
  logo: JSX.Element;
  currency: string;
}

const CondensedDataBody: React.FC<CondensedDataBodyProps> = ({
  title,
  figure,
  logo,
  currency,
}) => {
  return (
    <>
      <div className="rounded-b-md bg-dark-blue-600 w-full justify-between p-4 flex justify-around">
        <div>{logo}</div>
        <div className="flex flex-start w-4/6 justify-between items-center">
          <Text as="p" textStyle="body" className="text-grey">
            {title}
          </Text>
          <span className="flex flex-row items-end space-x-2">
            <Text as="p" textStyle="body" className="text-white text-xl">
              {figure &&
                figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
            <Text as="p" textStyle="body" className="text-grey">
              {currency}
            </Text>
          </span>
        </div>
      </div>
    </>
  );
};

export default CondensedDataBody;
