import React, { Component } from "react";
import styled from "styled-components";

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
export default class CharDetails extends Component {
  render() {
    return (
      <Details>
        <DetailsHeader>John Snow</DetailsHeader>
        <DetailsUl>
          <DetailsLi>
            <DetailsSpan weight="bold">Gender</DetailsSpan>
            <DetailsSpan>male</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">Born</DetailsSpan>
            <DetailsSpan>1783</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">Died</DetailsSpan>
            <DetailsSpan>1820</DetailsSpan>
          </DetailsLi>
          <DetailsLi>
            <DetailsSpan weight="bold">Culture</DetailsSpan>
            <DetailsSpan>First</DetailsSpan>
          </DetailsLi>
        </DetailsUl>
      </Details>
    );
  }
}
