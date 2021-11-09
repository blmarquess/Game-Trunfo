import React from 'react';
import PropTypes from 'prop-types';

export default class Filters extends React.Component {
  render() {
    const { cardName } = this.props;
    return (
      <div>
        Filter
        { cardName}
      </div>
    );
  }
}

Filters.propTypes = {
  cardName: PropTypes.string.isRequired,
};
