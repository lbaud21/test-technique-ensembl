import styled from "styled-components"

export const FooterSection = styled.footer`
  height: 20vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(30, 30, 30, 255);
  padding: 5% 10%;

  @media screen and (max-width: 650px){
    padding: 2% 5%
  }

`;

export const HelpersWrapper = styled.div`
display: flex;
flex-flow: row wrap;
margin-bottom: 0.8em;

@media screen and (max-width: 800px){
  margin-bottom: 0.4em
}

`

export const HelperItem = styled.a`
color: white;
font-size: 1em;

@media screen and (max-width: 800px){
  font-size: 0.7em;

}

`

export const HelperSeparator = styled.p`
color: white;
font-size: 1em;
margin: 0 0.5em;

@media screen and (max-width: 800px){
  font-size: 0.7em;

}

`

export const CopyrightText = styled.p`
margin: 0em;
margin-bottom: 2.5em;
color: white;
font-size: 1em;

@media screen and (max-width: 800px){
  margin-bottom: 1em
}

@media screen and (max-width: 800px){
  font-size: 0.7em;

}

`

export const IconsWrapper = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
`
const IconsGroup = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
`

export const SocialNetworkIconsWrapper = styled(IconsGroup)`
`
interface SocialNetworkIconProps {
backgroundImage : string
}

export const Icon = styled.a<SocialNetworkIconProps>`
outline: none;
background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  margin: 0 0.5em;
`

export const SocialNetworkIcon = styled(Icon)`
width: 2em;
height: 2em;

@media screen and (max-width: 800px){
  width: 1.5em;
height: 1.5em;
}

@media screen and (max-width: 550px){
  width: 1em;
  height: 1em;


}


`

export const StoreIconsWrapper = styled(IconsGroup)`
`

interface StoreIconsProps {
  width?: string
}

export const StoreIcon = styled(Icon)<StoreIconsProps>`
width: ${props => props.width || "9em"};
height: 4em;

@media screen and (max-width: 800px){
  width: 6.5em;
}

@media screen and (max-width: 550px){
  width: 5em;


}


`
