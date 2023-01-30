import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
// import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo: false,
    // isSaveButtonDisabled: '',
    // onInputChange: '',
    // onSaveButtonClick: '',
  };

  onInputChangeForm = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(name);
    this.setState({
      // [event.target.name]: event.target.value,
      [name]: value,
    });
  };

  checkFieldEntry = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    // console.log(this.state)
    if (cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0
    || cardRare === '') {
      return true;
    }
    return false;
  };

  checkAttributeValues = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    // console.log(this.state);
    const sumMaxAttrib = 210;
    const maxAttrib = 90;
    const sumAttributeValues = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
    // console.log(sumAttributeValues);
    const validateAttribute1 = parseInt(cardAttr1, 10) >= 0
    && parseInt(cardAttr1, 10) <= 90;
    const validateAttribute2 = parseInt(cardAttr2, 10) >= 0
    && parseInt(cardAttr2, 10) <= 90;
    const validateAttribute3 = parseInt(cardAttr3, 10) >= 0
    && parseInt(cardAttr3, 10) <= 90;
    if (sumAttributeValues > 210
      || validateAttribute1 === false
      || validateAttribute2 === false
      || validateAttribute3 === false
    ) {
      return true;
    }
    return false;
  };

  isSaveButtonDisabled = () => {
    // console.log('isSaveButtonDisabled')
    console.log(this.checkAttributeValues());
    // console.log(this.checkFieldEntry())
    if (this.checkFieldEntry() === false && this.checkAttributeValues() === false) {
      return true;
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;
    // console.log(this.state)
    // console.log(isSaveButtonDisabled)
    return (
      <main>
        <h1>My Tryunfo</h1>
        <div className="prin">
          <div className="formulario">
            <Form
              onInputChange={ this.onInputChangeForm }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            />
          </div>
          <div className="card">
            <Card
              // onInputChange={ this.onInputChangeForm }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </main>

    );
  }
}

export default App;
