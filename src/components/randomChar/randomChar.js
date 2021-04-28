import React, { Component } from "react";
import "./randomChar.css";
import styled from "styled-components";
import gotServices from "../../services/gotServices";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem !important;
  img {
    width: 100%;
  }
`;

export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateChar();
  }
  gotService = new gotServices();

  state = {
    char: {},
    loading: true, //пустой объект в который мы сохраним данные с сервера
    error: false,
  };

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25); //рандомное число 25-140

    this.gotService
      .getCharacter(id) //возвращает нужный на вид объекта,подробнее в gotServices
      .then(this.onCharLoaded) //для удобвства вынесли обновление стейта в функцию onCharLoaded
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state; //вытаскиваем ключи name gender и т.д из объекта char с помощью деструктуризации
    const errorMessage = error ? <ErrorMessage /> : null; //Если мы получаем ошибку - выводим сообщение ErrorMessage
    const spinner = loading ? <Spinner /> : null; //Если loading true - показываем спиннер
    const content = !(loading || error) ? <View char={char} /> : null; //Если loading или error true - результат в скобках будет true,инвентируем в false и ничего не выводим,если же оба false - показываем контент

    return (
      <RandomBlock>
        {errorMessage}
        {spinner}
        {content}
      </RandomBlock>
    );
  }
}

const View = ({ char }) => {
  //с помощью деструктуризации получаем сразу ключ объекта вместо props
  const { name, gender, born, died, culture } = char; //упрощенная запись this.props.char
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
