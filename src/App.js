import React from 'react';
import Form from './components/Form';

export default class App extends React.Component {
  render() {
    return (
      <div className="felx w-4/5 m-auto">
        <div className="w-2/5">
          <Form
            className="text-gray-700"
            cardName=""
            cardDescription=""
            cardAttr1=""
            cardAttr2=""
            cardAttr3=""
            cardImage=""
            cardRare=""
            cardTrunfo=""
            hasTrunfo=""
            isSaveButtonDisabled=""
            onInputChange=""
            onSaveButtonClick=""
          />
        </div>
        <div className="w-2/5">
          <Form />
        </div>
      </div>
    );
  }
}
