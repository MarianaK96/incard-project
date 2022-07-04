import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Layout } from "src/common_components/organisms";
import { LoginBackground } from "src/components/atoms";
import { LoginForm } from "src/components/organisms";
import { AuthContext } from "src/context/auth-context";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authContext?.isUserAuthenticated()) router.push("/dashboard");
  }, []);
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
