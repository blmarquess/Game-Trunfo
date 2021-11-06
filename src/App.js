import React from 'react';
import Form from './components/Form';
// import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <div className="felx w-4/5 m-auto">
        <div className="w-2/5">
          <Form
            className="text-gray-700"
            cardName="Carta"
            cardDescription="Supre carta"
            cardAttr1="10"
            cardAttr2="10"
            cardAttr3="54"
            cardImage="dasdasdasd"
            cardRare="super Rara"
            cardTrunfo="false"
            hasTrunfo="false"
            isSaveButtonDisabled="true"
            onInputChange="true"
            onSaveButtonClick="true"
          />
        </div>
        {/* <div className="w-2/5">
          <Card />
        </div> */}
      </div>
    );
  }
}
