import { LoginPage } from "src/components/templates";
import { AuthProvider } from "src/context/auth-context";

const Login: React.FC = ({}) => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default Login;
