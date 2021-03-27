import React from "react";
import {
  ContentElementWrapper,
  ContentElementImage,
  ContentElementTitle,
  ContentSectionWrapper,
} from "./styles";

const Content = () => {
  return (
    <ContentSectionWrapper>
      <ContentElementWrapper>
        <ContentElementImage />
        <ContentElementTitle></ContentElementTitle>
      </ContentElementWrapper>
    </ContentSectionWrapper>
  );
};

export default Content;
