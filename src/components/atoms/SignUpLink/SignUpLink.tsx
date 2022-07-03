import { text } from "src/utils/text";
import { Text } from "src/common_components/atoms";
import Link from "next/link";

interface SignUpLinkProps {}

const SignUpLink: React.FC<SignUpLinkProps> = ({}) => {
  return (
    <>
      <div className="flex">
        <Text as="p" textStyle="body" className="text-white mr-2">
          {text.login.noAccount}
        </Text>
        <Link href={"./"}>
          <Text
            as="a"
            textStyle="body"
            bold
            className="text-teal cursor-pointer"
          >
            {text.login.signUpLink}
          </Text>
        </Link>
      </div>
    </>
  );
};

export default SignUpLink;
