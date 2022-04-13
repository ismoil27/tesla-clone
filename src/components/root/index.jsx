import React from "react";
import Header from "../Header";
import Home from "../Home";
import { Container } from "./style";

const Root = () => {
  return (
    // <div className="App">
    <Container>
      <Header />
      <Home />
    </Container>
    // </div>
  );
};

export default Root;
