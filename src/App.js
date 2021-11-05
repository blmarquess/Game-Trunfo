import React from 'react';
import Form from './components/Form';
import Title from './components/utils/Title';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
      </div>
    );
  }
}
