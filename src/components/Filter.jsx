import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

const styleImput = `p-3 w-80 border-2 border-gray-700 w-full
bg-white mb-4 text-gray-700 rounded-lg`;

const btnFilter = `py-4 w-4/5 text-center rounded-md bg-blue-600 text-white text-xl
bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 mx-auto my-6
hover:to-yellow-500`;

const initState = { cardFilterName: '', cardFilterRare: '' };

export default class Filters extends React.Component {
  constructor() {
    super();
    this.toFilter = this.toFilter.bind(this);
    this.onInputCapture = this.onInputCapture.bind(this);
    this.state = initState;
  }

  onInputCapture({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  toFilter() {
    console.log('clicou ni btn filter');
  }

  render() {
    const { baseOnState, isDeliteCard } = this.props;
    const { cardFilterName, cardFilterRare } = this.state;

    const posFilter = baseOnState.filter((nom) => nom.cardName.includes(cardFilterName));

    console.log(posFilter);

    return (
      <section className="grid mx-8">
        <section className="grid col-1 my-10 w-11/12">
          <h1 className="text-gray-700 text-6xl "> Todas as cartas</h1>
        </section>

        <section className="grid grid-cols-3 gap-0 w-full">

          <nav className="">
            <h2>Filtros de busca</h2>
            <input
              type="text"
              placeholder="Nome da carta"
              className={ styleImput }
              id="nameCartFilter"
              name="cardFilterName"
              data-testid="name-filter"
              onChange={ this.onInputCapture }
            />
            <select
              className={ styleImput }
              placeholder="Raridade"
              name="cardFilterRare"
              data-testid="rare-filter"
              onChange={ this.onInputCapture }
            >
              <option name="Todos" value="todos">Todos</option>
              <option name="Normais" value="normal">Normals</option>
              <option name="Raros" value="raro">Raras</option>
              <option name="MuitoRaro" value="muito raro">Muito Raras</option>
            </select>

            <section
              className="text-center text-2xl
            flex flex-wrap items-center justify-center"
            >
              Super Trunfo
              <input
                type="checkbox"
                id="cst"
                name="check-super-trunfo"
                className="mx-1 w-10 h-4 border-transparent rounded-full"
              />

              <button
                type="button"
                className={ btnFilter }
                onClick={ this.toFilter }
              >
                Filtrar
              </button>
            </section>
          </nav>

          <section className="col-span-2">
            <div className="flex w-full justify-evenly flex-wrap">

              {
                baseOnState.map((carta, index) => (
                  <Deck
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
  baseOnState: PropTypes.string.isRequired,
  isDeliteCard: PropTypes.func.isRequired,
};
