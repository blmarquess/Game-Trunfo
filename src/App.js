import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <div className="felx w-4/5 m-auto">
        <div className="w-2/5">
          <Form />
        </div>
        <div className="w-2/5">
          <Card />
        </div>
      </div>
    );
  }
}
