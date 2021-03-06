export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}``, received ${res.status}`);
    }
    return await res.json();
  };

  getAllBooks() {
    return this.getResource(`/books/`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}/`);
  }

  async getAllCharacters() {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return res.map(this._transformCharacter); //проходим по массиву методом map с коллбеком _transformCharacter
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    // console.log(this._transformCharacter(character));
    return this._transformCharacter(character); //трансформируем одного персонажав в нужный вид функцией _transformCharacter
  }

  getAllHouses() {
    return this.getResource(`/houses/`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}/`);
  }

  isSet = (data) => {
    if (data) {
      return data;
    } else {
      return "no data :(";
    }
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformCharacter = (char) => {
    //данная функция трансформирует данные (char) в нужный нам вид
    return {
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture),
      id: this._extractId(char),
    };
  };

  _transformHouse(house) {
    //данная функция трансформирует данные (house) в нужный нам вид
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }
  _transformBook(book) {
    //данная функция трансформирует данные (book) в нужный нам вид
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released,
    };
  }
}
