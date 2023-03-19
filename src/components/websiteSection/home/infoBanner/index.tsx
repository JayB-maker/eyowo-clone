import {
  black,
  Card,
  InnerSection,
  MainSection,
  primaryOrange,
  Text,
  white,
} from "@/src/ui/styles";

const InfoBanner = () => {
  return (
    <MainSection width="100%" bg={black}>
      <InnerSection>
        <Card flex justifycontent="center" alignitems="center" padding="16px 0">
          <Text size="16px" lineheight="normal" color={white}>
            Get better with your business money. Apply to the LIFT by Eyowo
            program now.{" "}
            <span
              style={{
                color: `${primaryOrange}`,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Start here
            </span>
          </Text>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default InfoBanner;
