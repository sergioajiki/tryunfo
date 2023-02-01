import React from 'react';
import PropTypes from 'prop-types';
import '../Card.css';

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
      <div className="cardMain">
        <span data-testid="name-card" className="nameCard">
          {/* Name */}
          {cardName}
        </span>
        <span className="imageCard">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </span>
        <br />
        <span className="descriptionCard" data-testid="description-card">
          Descrição
          {cardDescription}
        </span>
        <br />
        <div className="attributes">
          <span>
            <span className="attribs" data-testid="attr1-card">
              <span>
                Attr01.......................................
              </span>
              <span className="attribValue">
                {cardAttr1}
              </span>
            </span>
          </span>

          <span>
            <span className="attribs" data-testid="attr2-card">
              <span>
                Attr02........................................
              </span>
              <span className="attribValue">
                {cardAttr2}
              </span>
            </span>
          </span>

          <span>
            <span
              className="attribs"
              data-testid="attr3-card"
            >
              <span>
                Attr03.........................................
              </span>
              <span className="attribValue">
                {cardAttr3}
              </span>
            </span>
          </span>
        </div>
        <br />
        <span data-testid="rare-card">
          Nivel
          {cardRare}
        </span>
        {
          (!cardTrunfo === false)
          && <span className="sTrunfo" data-testid="trunfo-card">Super Trunfo</span>
        }
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
