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
    isSaveButtonDisabled: true,
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

  // checkFieldEntry = () => {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //   } = this.state;
  //   if (cardName.length === 0
  //   || cardDescription.length === 0
  //   || cardImage.length === 0
  //   || cardRare === '') {
  //     return false;
  //   }
  // };

  // checkAttributeValues = () => {
  //   const {
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //   } = this.state;
  //   const sumAttributeValues = cardAttr1 + cardAttr2 + cardAttr3;
  //   const validateAttribute1 = cardAttr1 > 0 && cardAttr1 < 90;
  //   const validateAttribute2 = cardAttr2 > 0 && cardAttr2 < 90;
  //   const validateAttribute3 = cardAttr3 > 0 && cardAttr3 < 90;
  //   if (sumAttributeValues < 210
  //     || validateAttribute1 === true
  //     || validateAttribute2 === true
  //     || validateAttribute3 === true
  //   ) {
  //     return false;
  //   }
  // };

  // isSaveButtonDisabled = () => {
  //   if(checkAttributeValues === false 
  //     && checkFieldEntry === false
  //     ) {
  //     this.setState({
  //       isSaveButtonDisabled: false,
  //     })
  //   }
  // };

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
      isSaveButtonDisabled,
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
              isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
