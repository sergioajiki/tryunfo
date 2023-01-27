import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: 0,
  //   cardAttr2: 0,
  //   cardAttr3: 0,
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: false,
  //   hasTrunfo: false,
  //   isSaveButtonDisabled: false,
  //   onInputChange: '',
  //   onSaveButtonClick: '',
  // }
  render() {
    return (
      <>
        <h1>My Tryunfo</h1>
        <Form />
        <Card />
      </>
    );
  }
}

export default App;
