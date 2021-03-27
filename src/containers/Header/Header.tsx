//style
import { HeaderWrapper } from "./styles";

//components
import NavBar from "components/Header/Navbar";
import TitleBar from "components/Header/TitleBar";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <NavBar />
      <TitleBar title={title} />
    </HeaderWrapper>
  );
};

export default Header;
