import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";

import ErrorMessage from "../errorMessage";
import styled from "styled-components";
import CharacterPage from "../characterPage";

const Button = styled.button`
  margin-bottom: 2.5rem;
  background-color: #dddddd;
  font-family: Marker Felt, fantasy;
`;

export default class App extends React.Component {
  state = {
    active: true,

    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  onToggleRandomChar = () => {
    this.setState({ active: !this.state.active });
  };
  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const char = this.state.active ? <RandomChar /> : null; //если ключ active:true - в showChar сохраняется компонент <RandomChar>
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <Button onClick={this.onToggleRandomChar}>Toggle random character</Button>
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}
