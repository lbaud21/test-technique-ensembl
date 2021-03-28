import React from "react";
import { HelpersWrapper, HelperItem, HelperSeparator } from "./styles";

const helpersList = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Collection Statement",
  "Help",
  "Manage Account",
];

const Footer = () => {
  return (
    <HelpersWrapper>
      {helpersList.map((helper) => (
        <>
          <HelperItem>{helper}</HelperItem>
          <HelperSeparator>|</HelperSeparator>
        </>
      ))}
    </HelpersWrapper>
  );
};

export default Footer;
