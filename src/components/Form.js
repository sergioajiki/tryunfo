import React from 'react';

class Form extends React.Component {
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
              required
            />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição
            <textarea
              data-testid="description-input"
              id="descricao"
              name="descricao"
              type="text"
              maxLength="500"
              required
            />
          </label>

        </form>
      </>

    );
  }
}

export default Form;
