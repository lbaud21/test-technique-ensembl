import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorMessage = styled.p`
  color: black;
`;

export const ContentSection = styled.section`
  min-height: 40vh;
  padding: 5% 10%;
  padding-right: 1.5%;

  @media screen and (max-width: 800px) {
    padding: 5% 2%;
  }
`;

export const HomeContentSectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const ProgramContentSectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const ContentElementWrapperLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  width: 15%;
  height: 40vh;
  margin-right: 2%;
  text-decoration: none;

  @media screen and (max-width: 1000px) {
    width: 20%;
  }

  @media screen and (max-width: 800px) {
    width: 30%;
  }

  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;

export const ContentElementWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 13%;
  height: 40vh;
  text-decoration: none;

  @media screen and (max-width: 1000px) {
    width: 20%;
  }

  @media screen and (max-width: 800px) {
    width: 30%;
    height: 60vh;
  }

  @media screen and (max-width: 700px) {
    width: 45%;
    height: 70vh;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
    height: 70vh;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 90vh;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    height: 100vh;
  }
`;

interface ContentElementImageProps {
  backgroundImage: string;
  backgroundColor?: string;
  backgroundPosition: string;
  backgroundSize: string;
}

export const ContentElementImage = styled.div<ContentElementImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-image: url(${(props) => props.backgroundImage});
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  background-repeat: no-repeat;
  background-position: ${(props) => props.backgroundPosition};
  background-size: ${(props) => props.backgroundSize};

  @media screen and (max-width: 800px) {
    background-size: cover;
  }
`;

export const ContentElementImageText = styled.p`
  color: black;
  font-size: 1em;
  text-align: left;
  margin: 0.5em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;

export const ContentElementTitle = styled.h3`
  color: white;
  font-size: 2.5em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
