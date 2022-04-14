import React from "react";
import { Container, Menu } from "./style";

const Header = () => {
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
      </Menu.Right>
    </Container>
  );
};

export default Header;
