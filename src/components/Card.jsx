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
