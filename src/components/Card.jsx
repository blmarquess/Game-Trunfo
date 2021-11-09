import React, { Component } from 'react';
import PropTypes from 'prop-types';

const spanNum = 'bg-green-900 text-white text-center rounded-r-xl -m-3 p-2 w-20';
const labelLevel = 'bg-gray-100 flex justify-between rounded-xl m-3 p-3';
const raridade = `border-2 rounded-xl text-center flex items-center shadow-lg
justify-center text-white bg-green-800 font-black text-xl w-40 h-12`;
const container = `flex-col min-w-1/5 max-w-1/5 p-3 border-8 rounded-3xl shadow-lg
border-blue-50 bg-green-700 box-content grid grid-cols-1`;
const topCard = 'rounded-t-xl bg-green-900 text-right p-4 flex items-end justify-between';

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
      <div className={ container }>
        <section className={ topCard }>
          <div className="text-4xl text-left h-8">
            {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
          <span className="text-4xl text-right text-white" data-testid="name-card">
            { cardName }
          </span>
        </section>
        <section className="flex-col w-full h-96 overflow-hidden object-fill ">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </section>
        <section
          className="px-4 py-2 w-full -mt-24 mb-2 bg-green-700
          bg-clip-text transform -skew-y-6 h-24 text-md flex-grow"
        >
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </section>
        <section className="bg-white -mt-12 rounded-b-xl pt-16 pb-10 h-80">
          <section className="flex justify-end -mt-8 px-4 mx-6">
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
          <section>
            <div className={ raridade }>
              <span id="raridade" name="cardRare" className="text-white">
                { cardRare }
              </span>
            </div>
          </section>
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
