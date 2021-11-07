import React, { Component } from 'react';
import PropTypes from 'prop-types';

const spanNum = 'bg-green-900 text-white rounded-r-xl -m-3 py-3 px-8 min-w-8';
const labelLevel = 'bg-gray-100 flex justify-between rounded-xl m-3 p-3';

export default class Card extends Component {
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
      <div
        className="
        flex-col min-w-1/5 max-w-1/5 p-3 border-8 rounded-3xl
        border-blue-50 bg-green-700 box-content grid grid-cols-1
        "
      >
        <section className="rounded-t-xl bg-green-900 text-right p-2">
          <span className="text-4xl text-right text-white p-4" data-testid="name-card">
            { cardName }
          </span>
        </section>
        <section className="flex-col w-full h-96 overflow-hidden object-fill ">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </section>
        <section
          className="p-4 w-full -mt-12 bg-green-700
          bg-clip-text transform -skew-y-6 h-24 text-2xl"
        >
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </section>
        <section className="bg-white -mt-12 rounded-b-xl pt-16 pb-10 h-80">
          <section>
            <span data-testid="rare-card">{ cardRare }</span>
          </section>
          <section id="atributs" className="p-4 text-gray-800 text-2xl">
            <div className={ labelLevel }>
              <span id="att1">Atributs 01 :</span>
              <span data-testid="attr1-card" className={ spanNum }>{ cardAttr1 }</span>
            </div>
            <div className={ labelLevel }>
              <span id="att2">Atributs 02 :</span>
              <span data-testid="attr2-card" className={ spanNum }>{ cardAttr2 }</span>
            </div>
            <div className={ labelLevel }>
              <span id="att3">Atributs 03 :</span>
              <span data-testid="attr3-card" className={ spanNum }>{ cardAttr3 }</span>
            </div>
          </section>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
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
