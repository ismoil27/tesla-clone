import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import { ReactComponent as logo } from "../assets/icons/logo.svg";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

Container.Logo = styled(logo)``;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

Menu.Item = styled.p`
  /* font-weight: 600; */
  /* text-transform: uppercase; */
  padding: 0 10px;
`;

Menu.Right = styled.div`
  a {
    /* font-weight: 600; */
    /* text-transform: uppercase; */
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseOutlined)`
  cursor: pointer;
`;

export { Container, Menu, BurgerNav, CustomClose, CloseWrapper };
