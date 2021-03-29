import React from "react";
import {
  ErrorMessage,
  ContentSection,
  ContentElementWrapper,
  ContentElementImage,
  ContentElementImageText,
  ProgramContentSectionWrapper,
} from "./styles";

import { Program } from "hooks/types";

import Loader from "Loader/Loader";

const ProgramContent = ({
  loading,
  error,
  programList,
}: {
  loading: boolean;
  error: boolean;
  programList: Program[];
}) => {
  if (loading) {
    return (
      <ContentSection>
        <ProgramContentSectionWrapper>
          <Loader />
        </ProgramContentSectionWrapper>
      </ContentSection>
    );
  }

  if (error) {
    return (
      <ContentSection>
        <ProgramContentSectionWrapper>
          <ErrorMessage>Oops, something went wrong</ErrorMessage>
        </ProgramContentSectionWrapper>
      </ContentSection>
    );
  }

  return (
    <ContentSection>
      <ProgramContentSectionWrapper>
        {programList.map((program) => (
          <ContentElementWrapper key={program.title}>
            <ContentElementImage
              backgroundImage={program.images["Poster Art"].url}
              backgroundPosition="top left"
              backgroundSize="contain"
            />
            <ContentElementImageText>{program.title}</ContentElementImageText>
          </ContentElementWrapper>
        ))}
      </ProgramContentSectionWrapper>
    </ContentSection>
  );
};

export default ProgramContent;
