import React from 'react';
import PropTypes from 'prop-types';

const btnSave = `py-4 w-3/5 justify-center rounded-md bg-blue-600 text-white text-xl
bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500
hover:to-yellow-500`;

export default class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="p-10 flex-col">
        <div className="text-center m-10">
          <strong className="text-4xl">Adicionar nova carta</strong>
        </div>
        <label htmlFor="cardNme">
          <strong>Nome:</strong>
          <input
            className="p-3 w-full border-b-2 border-gray-700 bg-white mb-2"
            id="cardNme"
            name="cardName"
            value={ cardName }
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDesc">
          <strong>Descrição:</strong>
          <textarea
            className="p-2 w-full border-b-2 border-gray-700 bg-white mb-2"
            id="cardDesc"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Attr1" className="flex items-center py-2">
          <strong>Attr1:</strong>
          <input
            className="p-3 ml-4 w-full border-2 border-gray-700 bg-white mb-2"
            id="Attr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label htmlFor="Attr2" className="flex items-center py-2">
          <strong>Attr2:</strong>
          <input
            className="p-3 ml-4 w-full border-2 border-gray-700 bg-white mb-2"
            id="Attr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label htmlFor="Attr3" className="flex items-center py-2">
          <strong>Attr3:</strong>
          <input
            className="p-3 ml-4 w-full border-2 border-gray-700 bg-white mb-2"
            id="Attr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <div className="w-full text-right mb-8">
          <span>Pontos Restantes = 000 </span>
        </div>
        <label htmlFor="cardImg" className="flex items-center py-2 mb-4">
          <strong>Image:</strong>
          <input
            className="p-3 ml-4 w-full border-2 border-gray-700 bg-white mb-2"
            id="cardImg"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="opt">
          <strong>Rariade:</strong>
          <select
            className="p-3 w-full border-b-2 border-gray-700 bg-white mb-4"
            id="opt"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label
              htmlFor="trunf"
              className="text-xl py-2 w-full flex justify-center items-center"
            >
              <input
                className="p-4 rounded-md bg-white w-10 h-4"
                id="trunf"
                name="cardTrunfo"
                type="checkbox"
                onChange={ onInputChange }
                checked={ cardTrunfo }
              />
              <strong>
                Super Trunfo:
              </strong>
            </label>
          )}

        <div className="mx-auto my-8 flex justify-center">
          <button
            disabled={ isSaveButtonDisabled }
            className={ btnSave }
            onClick={ onSaveButtonClick }
            name="save-button"
            type="button"
            value={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
