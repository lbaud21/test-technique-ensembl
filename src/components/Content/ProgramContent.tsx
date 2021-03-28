import React from "react";
import {
  ContentSection,
  ContentElementWrapper,
  ContentElementImage,
  ContentElementTitle,
  ContentSectionWrapper,
} from "./styles";

import useFetchProgram from "hooks/useFetchProgram";

const Content = () => {
  const { loading, error, programList } = useFetchProgram("series");

  return (
    <ContentSection>
      <ContentSectionWrapper>
        <ContentElementWrapper>
          {/* <ContentElementImage /> */}
          <ContentElementTitle></ContentElementTitle>
        </ContentElementWrapper>
      </ContentSectionWrapper>
    </ContentSection>
  );
};

export default Content;
