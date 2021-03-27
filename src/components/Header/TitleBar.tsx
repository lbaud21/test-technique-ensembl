import React from "react";
import { TitlebarWrapper, TitlebarTitle } from "./styles";

interface TitleBarProps {
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  return (
    <TitlebarWrapper>
      <TitlebarTitle>{title}</TitlebarTitle>
    </TitlebarWrapper>
  );
};

export default TitleBar;
