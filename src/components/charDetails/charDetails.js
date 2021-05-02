import React, { Component } from "react";
import styled from "styled-components";
import gotServices from "../../services/gotServices";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const Details = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
`;

const DetailsHeader = styled.h4`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
`;
const DetailsUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;
const DetailsLi = styled.li`
  display: flex !important;
  justify-content: space-between !important;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
  &:first-child {
    border-top-width: 0;
  }
  span {
    font-weight: ${(props) => props.weight};
  }
`;
const DetailsSpan = styled.span`
  font-weight: ${(props) => props.weight || "400"};
`;

const SelectionError = styled.span`
  color: white;
`;
export default class CharDetails extends Component {
  gotServices = new gotServices();

  state = {
    char: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  updateChar() {
    const { charId } = this.props;
    if (!charId) return;

    this.setState({ loading: true });

    this.gotServices
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(() => this.onError());
  }
  // this.foo.bar = 0;

  onError() {
    this.setState({
      char: null,
      error: true,
    });
  }

  render() {
    if (!this.state.char && this.state.error) {
      return <ErrorMessage />;
    } else if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }

    const { name, gender, born, died, culture } = this.state.char;

    if (this.state.loading) {
      return (
        <div className="char-details rounded">
          <Spinner />
        </div>
      );
    }
    return (
      <Details>
        <DetailsHeader>{name}</DetailsHeader>
        <DetailsUl>
          <DetailsLi>
            <DetailsSpan weight="bold">Gender</DetailsSpan>
            <DetailsSpan>{gender}</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">{born}</DetailsSpan>
            <DetailsSpan>1783</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">{died}</DetailsSpan>
            <DetailsSpan>1820</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">{culture}</DetailsSpan>
            <DetailsSpan>First</DetailsSpan>
          </DetailsLi>
        </DetailsUl>
      </Details>
    );
  }
}
