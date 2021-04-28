import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 2.5rem;
  background-color: #dddddd;
  font-family: Marker Felt, fantasy;
`;

export default class App extends React.Component {
  state = {
    active: true,
  };

  onToggleRandomChar = () => {
    this.setState({ active: !this.state.active });
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
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
