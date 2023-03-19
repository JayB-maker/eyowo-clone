import { footerDetails } from "@/src/data";
import { Card, TitleText, black, LinkText } from "@/src/ui/styles";
import React from "react";

const MainFooter = () => {
  return (
    <Card flex>
      {footerDetails.map((footer, index) => (
        <Card key={index} flex flexdirection="column" gap="32px">
          <TitleText size="18px" lineheight="normal" color={black}>
            {footer.heading}
          </TitleText>
          <Card flex>
            {footer.subDetails.map((subDetail, index) => (
              <Card flex flexdirection="column" gap="32px" width="220px">
                {subDetail.subheading !== "" && (
                  <TitleText size="16px" lineheight="normal" color="#b9b9b9">
                    {subDetail.subheading}
                  </TitleText>
                )}
                <Card flex flexdirection="column" gap="32px">
                  {subDetail.menu.map((menu, index) => (
                    <LinkText
                      href={menu.path}
                      key={index}
                      size="16px"
                      lineheight="normal"
                      color={black}
                      weight="300"
                    >
                      {menu.handle}
                    </LinkText>
                  ))}
                </Card>
              </Card>
            ))}
          </Card>
        </Card>
      ))}
    </Card>
  );
};

export default MainFooter;
