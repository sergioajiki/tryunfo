import React from 'react';

class Form extends React.Component {
  // const {
  //   cardName,
  //   cardDescription,
  //   cardAttr1,
  //   cardAttr2,
  //   cardAttr3,
  //   cardImage,
  //   cardRare,
  //   cardTrunfo,
  //   hasTrunfo,
  //   isSaveButtonDisabled,
  //   onInputChange,
  //   onSaveButtonClick,
  // } = this.props

  render() {
    return (
      <>
        <h1>Adicione Nova Carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              name="name"
              type="text"
              maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              id="description"
              name="description"
              type="text"
              maxLength="500"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="Attr01">
            Attr01
            <input
              data-testid="attr1-input"
              id="attr01"
              name="attr01"
              type="text"
              maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="Attr02">
            Attr02
            <input
              data-testid="attr2-input"
              id="attr02"
              name="attr02"
              type="text"
              maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="Attr03">
            Attr03
            <input
              data-testid="attr3-input"
              id="attr03"
              name="attr03"
              type="text"
              maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              name="image"
              type="text"
              maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="rarity"
              name="rarity"
              // type="text"
              // maxLength="40"
              value=""
              required
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="super-trunfo">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              id="super-trunfo"
              name="super-trunfo"
              type="checkbox"
              // maxLength="40"
              value=""
              required
            />
          </label>
          <br />
          <button
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

export default Form;
