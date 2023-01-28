import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css'

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    // isSaveButtonDisabled: false,
    // onInputChange: '',
    // onSaveButtonClick: '',
  };

  onInputChangeForm = ( { target } ) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(name);
    this.setState({
      // [event.target.name]: event.target.value,
      [name]: value,
    });
  };

  render() {
    return (
      <main>
        <h1>My Tryunfo</h1>
        <div className="prin">
          <div className="formulario">
            <Form
              onInputChange={this.onInputChangeForm}
              cardName={this.state.cardName}
              cardDescription={this.state.cardDescription}
              cardAttr1={this.state.cardAttr1}
              cardAttr2={this.state.cardAttr2}
              cardAttr3={this.state.cardAttr3}
              cardImage={this.state.cardImage}
              cardRare={this.state.cardRare}
              cardTrunfo={this.state.cardTrunfo}
            />
          </div>
          <div className="card">
            <Card
              cardName={this.state.cardName}
              cardDescription={this.state.cardDescription}
              cardAttr1={this.state.cardAttr1}
              cardAttr2={this.state.cardAttr2}
              cardAttr3={this.state.cardAttr3}
              cardImage={this.state.cardImage}
              cardRare={this.state.cardRare}
              cardTrunfo={this.state.cardTrunfo}
            />
          </div>
        </div>
      </main>

    );
  }
}

export default App;
