import React from 'react';
import PropTypes from 'prop-types';
import InputCard from './utils/InputCard';

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
      <form className="flex-col w-4/5 m-auto flex-wrap mt-4 mb-4 p-6">
        <InputCard
          campo="Nome:"
          value={ cardName }
          data-testid="name-input"
          type="text"
          onChange={ onInputChange }
        />
        <InputCard
          campo="textarea:"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <InputCard
          campo="Attr1:"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
          type="number"
        />
        <InputCard
          campo="Attr2:"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
          type="number"
        />
        <InputCard
          campo="Attr2:"
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
          type="number"
        />
        <InputCard
          campo="Image:"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
          type="text"
        />

        <select
          value={ cardRare }
          data-testid="rare-input"
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <InputCard
          campo="Super Trybe Trunfo"
          type="checkbox"
          data-testid="trunfo-input"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />

        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
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
