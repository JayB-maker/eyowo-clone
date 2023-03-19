import { termsDetails } from "@/src/data";
import { black, Card, LinkText } from "@/src/ui/styles";
import React from "react";

const TermsOfServices = () => {
  return (
    <Card flex gap="32px">
      {termsDetails.map((term, index) => (
        <LinkText
          href={term.path}
          size="14px"
          lineheight="normal"
          color={black}
          weight="300"
        >
          {term.handle}
        </LinkText>
      ))}
    </Card>
  );
};

export default TermsOfServices;
