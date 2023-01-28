import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    // isSaveButtonDisabled: false,
    // onInputChange: '',
    // onSaveButtonClick: '',
  };

  onInputChangeForm = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    this.setState({
      // [event.target.name]: event.target.value,
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <h1>My Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChangeForm }
          cardName={ this.state.cardName }
          cardDescription={ this.state.cardDescription }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardImage={ this.state.cardImage }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }

        />
        <Card
          cardName={ this.state.cardName }
          cardDescription={ this.state.cardDescription }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardImage={ this.state.cardImage }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }
        />
      </>
    );
  }
}

export default App;
