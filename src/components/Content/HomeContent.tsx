import React from "react";
import {
  ContentElementWrapperLink,
  ContentElementImage,
  ContentElementTitle,
  ContentSectionWrapper,
  ContentElementImageText,
} from "./styles";

const Content = () => {
  return (
    <ContentSectionWrapper>
      <ContentElementWrapperLink to="/series">
        <ContentElementImage
          backgroundImage="/assets/images/placeholder.png"
          backgroundColor="#34363b"
        >
          <ContentElementTitle>Series</ContentElementTitle>
        </ContentElementImage>
        <ContentElementImageText>Popular Series</ContentElementImageText>
      </ContentElementWrapperLink>

      <ContentElementWrapperLink to="/movies">
        <ContentElementImage
          backgroundImage="/assets/images/placeholder.png"
          backgroundColor="#34363b"
        >
          <ContentElementTitle>Movies</ContentElementTitle>
        </ContentElementImage>
        <ContentElementImageText>Popular Movies</ContentElementImageText>
      </ContentElementWrapperLink>
    </ContentSectionWrapper>
  );
};

export default Content;
