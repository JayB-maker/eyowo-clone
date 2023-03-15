import { Card, InnerSection, MainSection } from "@/src/ui/styles";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

const Header = () => {
  return (
    <>
      <MainSection width="100%">
        <InnerSection>
          <Card
            flex
            justifycontent="space-between"
            alignitems="center"
            padding="25px 0"
          >
            <LeftDiv />
            <RightDiv />
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default Header;
