import styled from "styled-components"

export const HelpersWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
`

export const HelperItem = styled.a`
color: white;
font-size: 1em;
`

export const HelperSeparator = styled.p`
color: white;
font-size: 1em;
margin: 0 0.5em;
`

export const CopyrightText = styled.p`
color: white;
font-size: 0.5em;
`

export const IconsWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
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
  background-position: center;
  background-size: contain;
`

export const SocialNetworkIcon = styled(Icon)`
width: 2em;
height: 2em;
`

export const StoreIconsWrapper = styled(IconsGroup)`

`

export const StoreIcon = styled(Icon)`
width: 6em;
height: 2em;
`
