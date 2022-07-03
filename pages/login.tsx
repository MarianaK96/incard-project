import { LoginPage } from "src/components/templates";
import { AuthProvider } from "src/context/auth-context";

const login: React.FC = ({}) => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default login;
