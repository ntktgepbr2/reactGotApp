import React, { Component } from "react";
import styled from "styled-components";

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
  render() {
    return (
      <ItemListUl>
        <ItemListLi>John Snow</ItemListLi>
        <ItemListLi>Brandon Stark</ItemListLi>
        <ItemListLi>Geremy</ItemListLi>
      </ItemListUl>
    );
  }
}
