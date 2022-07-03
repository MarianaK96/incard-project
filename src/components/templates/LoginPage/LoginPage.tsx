import { FormInput } from "src/common_components/atoms";
import { Layout } from "src/common_components/organisms";
import { LoginBackground } from "src/components/atoms";
import { LoginForm } from "src/components/organisms";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <>
      <LoginBackground />
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default LoginPage;
