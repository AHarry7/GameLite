import { HStack, Switch, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";

const Header = () => {
  return (
    <HStack justify={"space-between"}>
      <Image src={Logo} alt="image" boxSize={"55px"} />
      <HStack>
        <Switch />
        <Text>Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default Header;
