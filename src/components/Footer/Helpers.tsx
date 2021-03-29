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
      {helpersList.map((helper, index) => (
        <React.Fragment key={helper}>
          <HelperItem>{helper}</HelperItem>
          {index !== helpersList.length - 1 ? (
            <HelperSeparator>|</HelperSeparator>
          ) : null}
        </React.Fragment>
      ))}
    </HelpersWrapper>
  );
};

export default Footer;
