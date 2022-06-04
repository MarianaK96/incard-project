import { Home } from "components/templates";
import { HomeWrapper } from "./home.styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HomeWrapper>
        <Home />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
