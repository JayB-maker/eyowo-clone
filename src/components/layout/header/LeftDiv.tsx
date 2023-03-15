import { navLeftDetails } from "@/data";
import {
  Card,
  gray,
  Image,
  LinkText,
  primaryOrange,
  textColor,
  TitleText,
} from "@/src/ui/styles";

const LeftDiv = () => {
  return (
    <Card flex alignitems="center" gap="40px">
      <LinkText href="/">
        <Image src="assets/eyowo-logo.svg" />
      </LinkText>
      <Card flex alignitems="center" gap="24px">
        {navLeftDetails.map((nav, index) => (
          <Card key={index} pointer radius="6px" hoverbg={gray} transition="0.5s ease">
            <TitleText
              size="16px"
              lineheight="normal"
              padding="10px"
              color={textColor}
              hovercolor={primaryOrange}
              transition="0.5s ease"
            >
              {nav.menu}
            </TitleText>
          </Card>
        ))}
      </Card>
    </Card>
  );
};

export default LeftDiv;
