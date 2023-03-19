import { Card, Text } from "@/src/ui/styles";
import React from "react";

const Copyright = () => {
  return (
    <Card flex flexdirection="column" gap="32px">
      <Text size="12px" lineheight="18px" color="#b9b9b9" weight="300">
        Eyowo is a CBN-regulated bank that unifies all the financial tools you
        need to pay, receive, budget and save money in one place, also providing
        you with the safest card in Nigeria in partnership with Mastercard.
      </Text>
      <Text size="12px" lineheight="18px" color="#b9b9b9" weight="300">
        Eyowo’s services are delivered by two regulated entities, Eyowo
        Integrated Payments Limited and Eyowo Microfinance Bank. Eyowo
        Integrated Payments Ltd (RC1512927) is licensed by the Central Bank of
        Nigeria as a Payments Solutions Provider. Registered address: 8, Oduduwa
        Crescent, Ikeja GRA, Lagos, Nigeria. Eyowo Microfinance Bank Ltd
        (RC838171) is licensed by the Central Bank of Nigeria as a Microfinance
        Bank. Registered address: 19 Araromi Street, Victoria Island, Lagos,
        Nigeria.
      </Text>
      <Text size="12px" lineheight="18px" color="#b9b9b9" weight="300">
        &copy; 2021 Eyowo Ltd
      </Text>
    </Card>
  );
};

export default Copyright;
