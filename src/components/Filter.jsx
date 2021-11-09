import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

const styleImput = `p-3 w-80 border-2 border-gray-700
bg-white mb-4 text-gray-700 rounded-lg`;

export default class Filters extends React.Component {
  render() {
    const { daseOnState, isDeliteCard } = this.props;
    return (
      <section className="grid mx-8">
        <section className="grid col-1 my-10 w-full">
          <h1 className="text-gray-700 text-6xl "> Todas as cartas</h1>
        </section>

        <section className="grid grid-cols-3 gap-0 w-full">

          <navi className="">
            <h2>Filtros de busca</h2>
            <input
              type="text"
              placeholder="Nome da carta"
              className={ styleImput }
              id="nameCartFilter"
              name="nameCartFilter"
              data-testid="rare-input"
              // onChange={ onInputChange }
            />
            <select className={ styleImput } placeholder="Raridade">
              <option name="todos" value="todos">Todos</option>
              <option name="normal" value="normal">Normal</option>
              <option name="raro" value="raro">raro</option>
              <option name="muito-raro" value="muito-raro">Muito Raro</option>
            </select>
          </navi>

          <section className="col-span-2">
            <div className="flex w-full justify-between">
              {
                daseOnState.map((carta, index) => (<Deck
                  key={ index + 1 }
                  { ...carta }
                  isDeliteCard={ isDeliteCard }
                />))
              }
            </div>
          </section>

        </section>
      </section>
    );
  }
}

Filters.propTypes = {
  daseOnState: PropTypes.string.isRequired,
  isDeliteCard: PropTypes.func.isRequired,
};
