import styled from "styled-components";
import { ReactComponent as arrow } from "../assets/icons/down-arrow.svg";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url("/images/model-s.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url( "/images/${props.bgImage} " )`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

ItemText.Title = styled.h1``;

ItemText.Desc = styled.p``;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled(arrow)`
  margin: 0 auto;
  /* margin-top: 20px; */
  overflow-x: hidden;
  height: 40px;
  animation: animateDown infinite 2s;
  cursor: pointer;
`;

export {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons,
};
