import {
  NavbarWrapper,
  NavbarTitle,
  NavbarContent,
  NavbarElement,
  NavbarElementContent,
} from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarTitle to="/">Demo Streaming</NavbarTitle>
      <NavbarContent>
        <NavbarElement>
          <NavbarElementContent>Login</NavbarElementContent>
        </NavbarElement>
        <NavbarElement backgroundColor="#34363b">
          <NavbarElementContent>Start your free trial</NavbarElementContent>
        </NavbarElement>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
