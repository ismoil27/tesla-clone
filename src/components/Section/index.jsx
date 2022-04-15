import React from "react";
import { Fade } from "react-reveal";
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
      <Fade bottom>
        <ItemText>
          <ItemText.Title>{title}</ItemText.Title>
          <ItemText.Desc>{description}</ItemText.Desc>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText} </RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow />
      </Buttons>
    </Wrap>
  );
};

export default Section;
