import React from 'react';
import PropTypes from 'prop-types';

export default class InputCard extends React.Component {
  render() {
    const { value, testid, type, campo } = this.props;
    return (
      <label htmlFor={ value } className="p-2 border-2 rounded m-1">
        { campo }
        <input
          value={ value }
          data-testid={ testid }
          type={ type }
          id={ value }
        />
      </label>
    );
  }
}

InputCard.propTypes = {
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  campo: PropTypes.string.isRequired,
};
