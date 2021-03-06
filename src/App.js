import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filter';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  dbState: [],
};

export default class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.HasTrunfoOn = this.HasTrunfoOn.bind(this);
    this.isDeliteCard = this.isDeliteCard.bind(this);
    this.randIds = this.gerarIds.bind(this);
    this.state = initialState;
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), () => this.isSaveButtonDisabled());
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, dbState,
    } = this.state;

    const id = this.gerarIds();

    const card = {
      id,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      dbState: dbState.concat(card),
    }, () => this.HasTrunfoOn());
  }

  gerarIds() {
    return Math.random(32).toString(18).split('.')[1];
  }

  HasTrunfoOn() {
    const { dbState } = this.state;
    const tunfOn = dbState.some((val) => val.cardTrunfo === true);
    this.setState({
      hasTrunfo: tunfOn,
    });
  }

  cardAttrMax() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxPower = 90; const totalPowerMax = 240;

    const numValid = [cardAttr1, cardAttr2, cardAttr3]
      .every((num) => num <= maxPower && num > 0);

    const totalPower = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, crv) => Number(acc) + Number(crv)) <= totalPowerMax;

    return numValid && totalPower;
  }

  isSaveButtonDisabled() {
    const entries = Object.values(this.state).every((ky) => ky !== '');

    if (entries && this.cardAttrMax()) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  }

  isDeliteCard({ target }) {
    const { dbState } = this.state;
    const newDB = dbState.filter((elm) => elm.id !== target.value);
    this.setState(() => ({
      dbState: newDB,
    }), () => this.HasTrunfoOn());
  }

  render() {
    const { dbState } = this.state;
    return (
      <div className="container m-auto shadow-xl">
        <section className="flex w-full justify-center">
          <div className="m-auto w-1/2 justify-center">
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              { ...this.state }
            />
          </div>
          <div className="bg-green-900 w-1/2 justify-center py-10 px-40">
            <div className="text-white text-4xl">
              <strong>Pr?? Visualiza????o</strong>
            </div>
            <div className="text-white w-full">
              <Card
                onInputChange={ this.onInputChange }
                { ...this.state }
              />
            </div>
          </div>
        </section>
        <section className="flex justify-between w-full">

          <Filters
            baseOnState={ dbState }
            isDeliteCard={ this.isDeliteCard }
          />

        </section>
      </div>
    );
  }
}
