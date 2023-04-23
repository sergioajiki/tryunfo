import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: 0,
  //   cardAttr2: 0,
  //   cardAttr3: 0,
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: false,
  //   // hasTrunfo: false,
  //   isSaveButtonDisabled: false,
  //   // onInputChange: '',
  //   // onSaveButtonClick: '',
  // };

  // onInputChange = (event) => {
  //   const { name, value } = event.target;
  //   // console.log(name);
  //   this.setState({
  //     // [event.target.name]: event.target.value,
  //     [name]: value,
  //   });
  // };

  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   // hasTrunfo,
    //   isSaveButtonDisabled,
    //   // onInputChange,
    //   onSaveButtonClick,
    // } = this.state;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      // checkHasTrunfo,
      // listCardsSaved,
    } = this.props;

    const checkTrunfo = (
      <label htmlFor="super-trunfo">
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          id="super-trunfo"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <>
        <h1>Adicione Nova Carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              name="cardName"
              type="text"
              maxLength="40"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              id="description"
              name="cardDescription"
              type="text"
              // maxLength="500"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="Attr01">
            Attr01
            <input
              data-testid="attr1-input"
              id="attr01"
              name="cardAttr1"
              type="number"
              maxLength=""
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="Attr02">
            Attr02
            <input
              data-testid="attr2-input"
              id="attr02"
              name="cardAttr2"
              type="number"
              maxLength="5"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="Attr03">
            Attr03
            <input
              data-testid="attr3-input"
              id="attr3"
              name="cardAttr3"
              type="number"
              maxLength="5"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              name="cardImage"
              type="text"
              // maxLength="100"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="rarity"
              name="cardRare"
              // type="text"
              // maxLength="40"
              value={ cardRare }
              onChange={ onInputChange }
              required
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <span>
            {
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : checkTrunfo
            }
          </span>
          <br />
          <br />
          <button
            type="submit"
            data-testid="save-button"
            // disabled={true}
            // disabled={ !cardName }
            disabled={ isSaveButtonDisabled }
            // disabled
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
