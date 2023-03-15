import { Card } from "@/src/ui/styles";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Card>{children}</Card>
      <Footer />
    </>
  );
};

export default Layout;
