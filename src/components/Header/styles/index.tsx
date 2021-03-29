import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: 20vh;
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarWrapper = styled(BarWrapper)`
  background-color: #235bd3;
`;

export const NavbarTitle = styled(Link)`
  font-size: 2.5em;
  color: white;
  margin: 0%;
  margin-left: 10%;
  padding-bottom: 0.1em;
  text-decoration: none;

  @media screen and (max-width: 650px) {
    font-size: 1.6em;
    margin-left: 5%;
  }
`;

export const NavbarContent = styled.div`
  height: 60%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
`;

interface NavbarElementProps {
  backgroundColor?: string;
}

export const NavbarElement = styled.div<NavbarElementProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.25em 1em;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  margin: 0em;
  margin-left: 1%;

  &:first-child {
    margin-left: 0%;
  }
`;

export const NavbarElementContent = styled.p`
  text-align: center;
  font-size: 1em;
  color: white;
  margin: 0em;
  width: 100%;
  white-space: nowrap;

  @media screen and (max-width: 650px) {
    font-size: 0.6em;
  }
`;

export const TitlebarWrapper = styled(BarWrapper)`
  background-color: #34363b;
`;

export const TitlebarTitle = styled.h2`
  font-size: 2em;
  color: white;
  margin-left: 10%;

  @media screen and (max-width: 650px) {
    font-size: 1.2em;
    margin-left: 5%;
  }
`;
