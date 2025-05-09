import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' borderRadius='md' />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;