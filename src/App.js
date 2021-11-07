import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = initialState;
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="flex w-full justify-center m-auto ">
        <div className="m-auto w-2/5 justify-center">
          <Form
            className="items-center p-10"
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
        </div>
        <div className="bg-green-700 w-2/5 justify-center p-10">
          <div className="text-white text-4xl m-10">
            <strong>Pré Visualização</strong>
          </div>
          <Card
            className="justify-center items-center p-10"
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
        </div>
      </div>
    );
  }
}
