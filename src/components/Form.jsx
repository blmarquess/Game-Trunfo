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
      <form className="flex-col p-4">
        <label htmlFor="cardName">
          Nome:
          <input
            className="p-2 w-full rounded-md bg-white mb-2"
            id="cardName"
            name="cardName"
            value={ cardName }
            data-testid="name-input"
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            className="p-2 w-full rounded-md bg-white mb-2"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="Attr1">
          Attr1:
          <input
            className="p-2 w-full rounded-md bg-white mb-2"
            id="Attr1:"
            name="Attr1:"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="Attr2">
          Attr2:
          <input
            className="p-2 w-full rounded-md bg-white mb-2"
            id="Attr2"
            name="Attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="Attr3">
          Attr3:
          <input
            className="p-2 w-full rounded-md bg-white mb-2"
            id="Attr3"
            name="Attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            className="p-2 w-full rounded-md bg-white mb-2"
            id="image"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="opt">
          Rariade:
          <select
            className="p-2 w-full rounded-md bg-white mb-2"
            id="opt"
            name="opt"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo" className="text-xl p-2 w-full">
          Super Trybe Trunfo:
          <input
            className="p-1 rounded-md bg-white m-2"
            id="trunfo"
            name="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>

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
