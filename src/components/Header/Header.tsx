//style
import { HeaderWrapper } from "./styles";

//components
import NavBar from "./Navbar";
import TitleBar from "./TitleBar";

const Header = ({ title }: { title: string }) => {
  return (
    <HeaderWrapper>
      <NavBar />
      <TitleBar title={title} />
    </HeaderWrapper>
  );
};

export default Header;
