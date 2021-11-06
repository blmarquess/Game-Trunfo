import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="flex-col m-auto">
        <section>
          <span className="text-lg text-green-900" data-testid="name-card">
            { cardName }
          </span>
        </section>
        <section className="flex-col p-4 w-full">
          <img src={ cardImage } alt="ImagemTrunfo" data-testid="image-card" />
        </section>
        <section>
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </section>
        <section>
          <span data-testid="rare-card">{ cardRare }</span>
        </section>
        <section id="atributs">
          <div>
            <span id="att1">Atributs 01 </span>
            <span data-testid="attr1-card">{ cardAttr1 }</span>
          </div>
          <div>
            <span id="att2">Atributs 02 </span>
            <span data-testid="attr2-card">{ cardAttr2 }</span>
          </div>
          <div>
            <span id="att3">Atributs 03 </span>
            <span data-testid="attr3-card">{ cardAttr3 }</span>
          </div>
        </section>
        <section>
          { supertrunfo(cardTrunfo) }
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
