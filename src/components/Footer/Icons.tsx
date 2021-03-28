import React from "react";
import {
  IconsWrapper,
  SocialNetworkIconsWrapper,
  SocialNetworkIcon,
  StoreIconsWrapper,
  StoreIcon,
} from "./styles";

const Icons = () => {
  return (
    <IconsWrapper>
      <SocialNetworkIconsWrapper>
        <SocialNetworkIcon backgroundImage="/assets/images/social/facebook-white.svg" />
        <SocialNetworkIcon backgroundImage="/assets/images/social/twitter-white.svg" />
        <SocialNetworkIcon backgroundImage="/assets/images/social/instagram-white.svg" />
      </SocialNetworkIconsWrapper>

      <StoreIconsWrapper>
        <StoreIcon backgroundImage="/assets/images/store/app-store.svg" />
        <StoreIcon backgroundImage="/assets/images/store/play-store.svg" />
        <StoreIcon backgroundImage="/assets/images/store/windows-store.svg" />
      </StoreIconsWrapper>
    </IconsWrapper>
  );
};

export default Icons;
