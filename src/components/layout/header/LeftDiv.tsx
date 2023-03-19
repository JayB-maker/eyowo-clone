import { navLeftDetails } from "@/data";
import {
  Card,
  gray,
  Image,
  LinkText,
  primaryOrange,
  Text,
  textColor,
  TitleText,
  white,
} from "@/src/ui/styles";
import { useState } from "react";
import NavElements from "./navElement/NavElements";

const LeftDiv = () => {
  const [hover, setHover] = useState(null);

  const toggle = (index: any) => {
    if (hover === index) {
      return setHover(null);
    }
    setHover(index);
  };

  return (
    <Card flex alignitems="center" gap="40px">
      <LinkText href="/">
        <Image src="assets/eyowo-logo.svg" />
      </LinkText>
      <Card flex alignitems="center" gap="24px">
        {navLeftDetails.map((nav, index) => (
          <Card position="relative" key={index}>
            <Card
              radius="6px"
              hoverbg={gray}
              transition="0.5s ease"
              onMouseEnter={() => toggle(index)}
              onMouseLeave={() => toggle(index)}
            >
              <TitleText
                pointer
                size="16px"
                lineheight="normal"
                padding="10px"
                color={textColor}
                hovercolor={primaryOrange}
                transition="0.5s ease"
              >
                {nav.menu}
              </TitleText>
              {hover === index && (
                <Card position="absolute" top="20px" left="0">
                  <Card
                    radius="16px"
                    padding="24px 20px"
                    flex
                    flexdirection="column"
                    gap="8px"
                    margin="25px 0 0"
                    bg={white}
                    shadow="rgba(0, 0, 0, 0.07) 4px 12px 40px 6px"
                  >
                    {nav.subMenu.length > 2 && (
                      <Card display="grid" gridcolumn="1fr 1fr">
                        <Text size="16px" color="#666666" lineheight="normal">
                          Go
                        </Text>
                        <Text size="16px" color="#666666" lineheight="normal">
                          Grow
                        </Text>
                      </Card>
                    )}
                    <Card
                      display={nav.subMenu.length > 2 ? "grid" : "flex"}
                      gridcolumn="1fr 1fr"
                      flexdirection="column"
                      gap="8px"
                    >
                      {nav.subMenu.map((subNav, index) => (
                        <NavElements
                          navMenu={nav.subMenu}
                          nav={subNav.heading}
                          icon={subNav.icon}
                          path={subNav.path}
                          description={subNav.details}
                          key={index}
                        />
                      ))}
                    </Card>
                  </Card>
                </Card>
              )}
            </Card>
          </Card>
        ))}
      </Card>
    </Card>
  );
};

export default LeftDiv;
