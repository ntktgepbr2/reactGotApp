import React, { Component } from "react";
import styled from "styled-components";
import gotServices from "../../services/gotServices";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const ItemListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;
const ItemListLi = styled.li`
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
`;
export default class ItemList extends Component {
  gotServices = new gotServices();

  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotServices.getAllCharacters().then((charList) => {
      this.setState({ charList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <ItemListLi key={item.id} onClick={() => this.props.onCharSelected(item.id)}>
          {item.name}
        </ItemListLi>
      );
    });
  }

  render() {
    const { charList, error } = this.state;
    if (error) return <ErrorMessage />;
    if (!charList) return <Spinner />;

    const items = this.renderItems(charList);
    return <ItemListUl>{items}</ItemListUl>;
  }
}
