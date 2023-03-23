import { Image } from "@/src/ui/styles";
import React from "react";
import styled, { keyframes } from "styled-components";

const coinAnimate = keyframes`
  0%   { top: 200px; }
  50%   { top: 275px; }
  100% { top: 200px; }
`;
const coinsAnimate = keyframes`
  0%   { top: -100px; }
  100%   {  top: 100vh }
`;

const AnimatingCoin = styled("img")`
  animation: ${coinAnimate} 5s ease-in-out infinite;
  position: absolute;
  left: -40px;
  width: 25%;
`;

const AnimatingDiv = styled("img")`
  transform: rotate(30deg);
  animation: ${coinsAnimate} 15s linear infinite;
  position: absolute;
  left: 465px;
  width: 8%;
  opacity: 0.2;
  z-index: -1;
`;

const AnimatingSlantedDiv = styled("img")`
  transform: rotate(-30deg);
  animation: ${coinsAnimate} 10s linear infinite;
  position: absolute;
  left: 900px;
  width: 4%;
  opacity: 0.2;
  z-index: -1;
`;

const HeroImages = () => {
  return (
    <>
      <Image
        src="assets/coin-bottom.png"
        position="absolute"
        width="25%"
        bottom="0"
        left="-40px"
      />
      <AnimatingCoin src="assets/coin-top.png" />
      <AnimatingDiv src="assets/coin-single.png" />
      <AnimatingSlantedDiv src="assets/coin-single.png" />
      <Image
        src="assets/plastic-card.png"
        position="absolute"
        width="28%"
        bottom="25px"
        right="-20px"
      />
    </>
  );
};

export default HeroImages;
