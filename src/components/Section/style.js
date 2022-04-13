import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

ItemText.Title = styled.h1``;

ItemText.Desc = styled.p``;

const ButtonGroup = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
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
`;

const RightButton = styled(LeftButton)``;

export { Wrap, ItemText, ButtonGroup, LeftButton, RightButton };
