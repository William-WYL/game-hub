import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (SearchText: string) => void;
}


const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' borderRadius='md' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;