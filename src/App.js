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
    // isSaveButtonDisabled: true,
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
    return (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare === '');
  };

  checkAttributeValues = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const sumMaxAttrib = 210;
    const maxAttrib = 90;
    const sumAttributeValues = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
    const validateAttribute1 = parseInt(cardAttr1, 10) >= 0
    && parseInt(cardAttr1, 10) <= maxAttrib;
    const validateAttribute2 = parseInt(cardAttr2, 10) >= 0
    && parseInt(cardAttr2, 10) <= maxAttrib;
    const validateAttribute3 = parseInt(cardAttr3, 10) >= 0
    && parseInt(cardAttr3, 10) <= maxAttrib;
    return ((sumAttributeValues > sumMaxAttrib)
      || !validateAttribute1
      || !validateAttribute2
      || !validateAttribute3
    );
  };

  isSaveButtonDisabled = () => !(this.checkFieldEntry() === false
  && this.checkAttributeValues() === false);

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
