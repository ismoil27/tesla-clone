import React from "react";
import { ButtonGroup, ItemText, LeftButton, RightButton, Wrap } from "./style";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <ItemText.Title>Model S</ItemText.Title>
        <ItemText.Desc>Order Online for Touchless Delivery</ItemText.Desc>
      </ItemText>
      <ButtonGroup>
        <LeftButton>CUSTOM ORDER</LeftButton>
        <RightButton>EXISTING INVENTORY</RightButton>
      </ButtonGroup>
    </Wrap>
  );
};

export default Section;
