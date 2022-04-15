import React, { useState } from "react";

import {
  BurgerNav,
  CloseWrapper,
  Container,
  CustomClose,
  CustomMenu,
  Menu,
} from "./style";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="">
        <Container.Logo />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Menu.Item key={index}>
              <a href="#"> {car} </a>
            </Menu.Item>
          ))}

        {/* <Menu.Item>
          <a href="#">Model 3</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Model X</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Model Y</a>
        </Menu.Item> */}
      </Menu>
      <Menu.Right>
        <a href="">Shop</a>
        <a href="">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
        {/* <a href="" >
          Menu
        </a> */}
      </Menu.Right>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
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
