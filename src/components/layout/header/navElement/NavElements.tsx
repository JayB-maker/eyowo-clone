import { Card } from "@/src/ui/styles";

interface INavElementProps {
  menu?: string;
  icon?: string;
  nav?: string;
  description?: string;
  path?: string;
}

const NavElements = (props: INavElementProps) => {
  const { description, icon, menu, nav, path } = props;
  return <Card></Card>;
};

export default NavElements;
