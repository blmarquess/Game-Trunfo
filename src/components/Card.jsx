import React, { Component } from 'react';
import PropTypes from 'prop-types';

const spanNum = 'bg-green-900 text-white text-center rounded-r-xl -m-3 p-2 w-20';
const labelLevel = 'bg-gray-100 flex justify-between rounded-xl m-3 p-3';
const raridade = `border-2 rounded-xl text-center flex items-center shadow-lg
justify-center text-white bg-green-800 font-black text-xl w-40 h-12`;
const container = `flex-col min-w-1/5 max-w-1/5 p-3 border-8 rounded-3xl shadow-2xl
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
            {cardTrunfo && <p>Super Trunfo</p>}
          </div>
          <span className="text-4xl text-right text-white">
            { cardName }
          </span>
        </section>
        <section className="flex-col w-full h-96 overflow-hidden object-fill">
          <img src={ cardImage } alt={ cardName } />
        </section>
        <section
          className="px-6 py-2 w-full -mt-32 mb-2 mx-0 bg-green-700
          bg-clip-text transform -skew-y-6 h-32 text-md flex-grow"
        >
          <p>
            { cardDescription }
          </p>
        </section>
        <section className="bg-white -mt-16 rounded-b-xl pt-16 pb-10 h-80">
          <section className="flex justify-end -mt-8 px-4 mx-6">
            <span>{ cardRare }</span>
          </section>
          <section id="atributs" className="p-4 text-gray-800 text-gray-800 2xl:text-xl lg:text-base md:text-sm">
            <div className={ labelLevel }>
              <span id="att1">Força :</span>
              <span className={ spanNum }>{ cardAttr1 }</span>
            </div>
            <div className={ labelLevel }>
              <span id="att2">Velocidade :</span>
              <span className={ spanNum }>{ cardAttr2 }</span>
            </div>
            <div className={ labelLevel }>
              <span id="att3">Destreza :</span>
              <span className={ spanNum }>{ cardAttr3 }</span>
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
