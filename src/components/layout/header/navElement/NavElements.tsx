import {
  black,
  Card,
  gray,
  Image,
  LinkText,
  Text,
  TitleText,
  white,
} from "@/src/ui/styles";

interface INavElementProps {
  menu?: string;
  icon?: string;
  nav?: string;
  description?: string;
  path: string;
  navMenu: Array<Object>;
}

const NavElements = (props: INavElementProps) => {
  const { description, icon, menu, nav, path, navMenu } = props;
  return (
    <>
      <LinkText href={path}>
        <Card
          flex
          gap="15px"
          alignitems="center"
          width="340px"
          hoverbg={gray}
          transition="0.5s ease"
          padding="10px"
          radius="6px"
        >
          <Card
            width="40px"
            height="40px"
            radius="50%"
            flex
            justifycontent="center"
            alignitems="center"
            bg={gray}
          >
            <Image src={icon} />
          </Card>
          <Card flex flexdirection="column" gap="">
            <TitleText color="#121212" size="16px" lineheight="normal">
              {nav}
            </TitleText>
            <Text color="#6a6a6a" size="12px" lineheight="normal">
              {description}
            </Text>
          </Card>
        </Card>
      </LinkText>
    </>
  );
};

export default NavElements;
