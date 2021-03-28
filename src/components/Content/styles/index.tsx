import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentSection = styled.section`
  min-height: 80vh;
  padding: 5% 10%;
`;

export const ContentSectionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;

export const ContentElementWrapperLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  width: 15%;
  height: 40vh;
  margin-right: 2%;
  text-decoration: none;
`;

export const ContentElementWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 15%;
  height: 40vh;
  margin-right: 2%;
  text-decoration: none;
`;

interface ContentElementImageProps {
  backgroundImage: string;
  backgroundColor?: string;
}

export const ContentElementImage = styled.div<ContentElementImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-image: url(${(props) => props.backgroundImage});
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200%;
`;

export const ContentElementImageText = styled.p`
  color: black;
  font-size: 1em;
  text-align: left;
  margin: 0.25em;
`;

export const ContentElementTitle = styled.h3`
  color: white;
  font-size: 2.5em;
`;
