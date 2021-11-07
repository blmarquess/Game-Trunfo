import React from 'react';
import PropTypes from 'prop-types';

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
      // hasTrunfo,
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
            data-testid="name-input"
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
            data-testid="description-input"
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
            data-testid="attr1-input"
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
            data-testid="attr2-input"
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
            data-testid="attr3-input"
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
            data-testid="image-input"
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
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunf" className="text-xl py-4 w-full">
          <input
            className="p-4 rounded-md bg-white m-2"
            id="trunf"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
          <strong>Super Trybe Trunfo:</strong>
        </label>
        <div className="m-14">
          <button
            className="px-5 py-2 rounded-md bg-blue-600 text-white"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
