import React from "react";
import Helpers from "./Helpers";
import Copyright from "./Copyright";
import Icons from "./Icons";
import { FooterSection } from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <Helpers />
      <Copyright />
      <Icons />
    </FooterSection>
  );
};

export default Footer;
