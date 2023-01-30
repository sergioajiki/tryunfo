import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div>
        <span data-testid="name-card">
          Name
          {cardName}
        </span>
        <br />
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <br />
        <span data-testid="description-card">
          Descrição
          {cardDescription}
        </span>
        <br />
        <span data-testid="attr1-card">
          attrib1
          {cardAttr1}
        </span>
        <br />
        <span data-testid="attr2-card">
          attrib2
          {cardAttr2}
        </span>
        <br />
        <span data-testid="attr3-card">
          attrib3
          {cardAttr3}
        </span>
        <br />
        <span data-testid="rare-card">
          Nivel
          {cardRare}
        </span>
        <br />
        {
          (!cardTrunfo === false) && <span data-testid="trunfo-card">Super Trunfo</span>
        }
        {/* <span>
        { isSaveButtonDisabled }
        </span> */}
        <br />
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  // isSaveButtonDisabled: PropTypes.bool,
  // onInputChange: PropTypes.func,
  // onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Card;
