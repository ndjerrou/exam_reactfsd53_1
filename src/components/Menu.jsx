import { Button, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Homepage</MenuItem>
        <MenuItem><Link to="/products/add">"Add a product</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Menu;
