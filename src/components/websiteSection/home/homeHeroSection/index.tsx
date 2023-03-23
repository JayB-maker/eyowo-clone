import { changingTextInformation } from "@/src/data";
import {
  black,
  Button,
  Card,
  Image,
  InnerSection,
  MainSection,
  primaryOrange,
  Text,
  TitleText,
  white,
} from "@/src/ui/styles";
import React, { useEffect, useState } from "react";
import HeroImages from "./heroImages/HeroImages";

const HomeHeroSection = () => {
  const [changingIndex, setChangingIndex] = useState(0);

  useEffect(() => {
    const newIndex =
      changingIndex > changingTextInformation.length - 2
        ? 0
        : changingIndex + 1;

    const timer = setTimeout(() => {
      setChangingIndex(newIndex);
    }, 1500);

    return () => clearTimeout(timer);
  }, [changingIndex]);

  console.log(changingIndex);

  return (
    <MainSection width="100%" overflow="hidden" >
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          gap="44px"
          alignitems="center"
          justifycontent="center"
          position="relative"
          minheight="calc(100vh - 200px)"
        >
          <HeroImages />
          <TitleText
            size="73px"
            lineheight="88px"
            color={black}
            weight="500"
            margin="-60px 0 0"
          >
            {changingTextInformation.map(
              (text, index) =>
                changingIndex === index && (
                  <span style={{ color: `${text.color}` }} key={index}>
                    {text.text}
                  </span>
                )
            )}{" "}
            money Better
          </TitleText>

          <Text size="24px" lineheight="40px" color={black}>
            Bank with the Better Bank.
          </Text>
          <Button
            margin="12px 0 0"
            bg={black}
            radius="8px"
            color={white}
            padding="16px 32px"
            hoverbg={primaryOrange}
          >
            Get Eyowo
          </Button>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default HomeHeroSection;
