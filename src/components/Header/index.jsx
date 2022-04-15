import React, { useState } from "react";

import { BurgerNav, CloseWrapper, Container, CustomClose, Menu } from "./style";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="">
        <Container.Logo />
      </a>
      <Menu>
        <Menu.Item>
          <a href="#">Model S</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Model 3</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Model X</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Model Y</a>
        </Menu.Item>
      </Menu>
      <Menu.Right>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="">Menu</a>
      </Menu.Right>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In </a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
