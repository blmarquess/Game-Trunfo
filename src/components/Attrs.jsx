import React from 'react';
import PropTypes from 'prop-types';

const spanNum = 'bg-green-900 text-white text-center rounded-r-xl -m-2 p-2 w-20';

const labelLevel = 'bg-gray-100 flex justify-between rounded-xl mx-3 mt-4 px-3 py-2';

export default class Attrs extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    return (
      <section id="atributs" className="p-4 text-gray-800 text-2xl">
        <div className={ labelLevel }>
          <span id="att1">Atributs 01 :</span>
          <span data-testid="attr1-card" className={ spanNum }>{ cardAttr1 }</span>
        </div>
        <div className={ labelLevel }>
          <span id="att2">Atributs 02 :</span>
          <span data-testid="attr2-card" className={ spanNum }>{ cardAttr2 }</span>
        </div>
        <div className={ labelLevel }>
          <span id="att3">Atributs 03 :</span>
          <span data-testid="attr3-card" className={ spanNum }>{ cardAttr3 }</span>
        </div>
      </section>
    );
  }
}

Attrs.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};
