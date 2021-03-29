import React from "react";
import {
  ContentSection,
  ContentElementWrapperLink,
  ContentElementImage,
  ContentElementTitle,
  HomeContentSectionWrapper,
  ContentElementImageText,
} from "./styles";

const Content = () => {
  return (
    <ContentSection>
      <HomeContentSectionWrapper>
        <ContentElementWrapperLink to="/series">
          <ContentElementImage
            backgroundImage="/assets/images/placeholder.png"
            backgroundColor="#34363b"
            backgroundPosition="center"
            backgroundSize="200%"
          >
            <ContentElementTitle>Series</ContentElementTitle>
          </ContentElementImage>
          <ContentElementImageText>Popular Series</ContentElementImageText>
        </ContentElementWrapperLink>

        <ContentElementWrapperLink to="/movies">
          <ContentElementImage
            backgroundImage="/assets/images/placeholder.png"
            backgroundColor="#34363b"
            backgroundPosition="center"
            backgroundSize="200%"
          >
            <ContentElementTitle>Movies</ContentElementTitle>
          </ContentElementImage>
          <ContentElementImageText>Popular Movies</ContentElementImageText>
        </ContentElementWrapperLink>
      </HomeContentSectionWrapper>
    </ContentSection>
  );
};

export default Content;
