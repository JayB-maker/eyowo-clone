import { Card, InnerSection, MainSection } from "@/src/ui/styles"
import Copyright from "./Copyright"
import MainFooter from "./mainFooter/MainFooter"
import TermsOfServices from "./TermsOfServices"

const Footer = () => {
  return (
    <MainSection width="100%" padding="120px 0 64px">
      <InnerSection>
        <Card flex flexdirection="column" gap="64px">
          <MainFooter />
          <TermsOfServices />
          <Copyright />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Footer