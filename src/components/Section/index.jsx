import React from "react";
import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  Wrap,
} from "./style";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <ItemText.Title>{title}</ItemText.Title>
        <ItemText.Desc>{description}</ItemText.Desc>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText} </RightButton>}
        </ButtonGroup>
        <DownArrow />
      </Buttons>
    </Wrap>
  );
};

export default Section;
