import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attrs from './Attrs';

const excluirBTN = `border-4 border-white rounded-xl shadow-lg
flex justify-center items-center text-white bg-red-600 shadow-2xl
font-black text-xl w-40 h-12 mx-auto cursor-pointer mt-2`;

const container = `flex-colp-3 border-8 rounded-3xl shadow-lg
border-blue-50 bg-green-700 box-content grid grid-cols-1 m-4 p-2`;

const topCard = `rounded-t-xl bg-green-900 text-right p-2 flex
items-center justify-between`;

const raridade = `border-2 rounded-xl text-center flex items-center shadow-lg
justify-center text-white font-black text-lg w-36 h-10 bg-gradient-to-r
from-green-600 to-blue-900`;

const superTrunfo = `flex items-center justify-start text-white
text-black shadow-md bg-gradient-to-r rounded-lg px-2
from-purple-400 via-pink-500 to-red-500`;

export default class Deck extends Component {
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
      isDeliteCard,
    } = this.props;

    return (
      <div className="flex-col w-2/7">
        <div className={ container }>
          <section className={ topCard }>
            <div className="text-xl text-left h-8">
              {cardTrunfo
                && (
                  <p data-testid="trunfo-card" className={ superTrunfo }>
                    Super Trunfo
                  </p>
                )}
            </div>
            <span className="text-2xl text-right text-white" data-testid="name-card">
              { cardName }
            </span>
          </section>
          <section className="flex-col w-full h-72 overflow-hidden object-fill ">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </section>
          <section
            className="px-4 py-2 w-full -mt-28 mb-2 bg-green-700
            bg-clip-text transform -skew-y-6 h-18 text-md flex-grow"
          >
            <p data-testid="description-card">
              { cardDescription }
            </p>
          </section>
          <section className="bg-white -mt-12 rounded-b-xl pt-16 pb-10 h-80">
            <section className="flex justify-end -mt-5 mb-0 mx-7">
              <span data-testid="rare-card" className={ raridade }>{ cardRare }</span>
            </section>
            <section className="mb-4">
              <Attrs
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
              />
            </section>
          </section>
        </div>
        <section className="flex mx-auto p-2 -mt-4">
          <button
            className={ excluirBTN }
            onClick={ isDeliteCard }
            data-testid="delete-button"
            name="btn-excluir"
            type="button"
            value="{ isSaveButtonDisabled }"
          >
            Excluir
          </button>
        </section>
      </div>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isDeliteCard: PropTypes.func.isRequired,
};
