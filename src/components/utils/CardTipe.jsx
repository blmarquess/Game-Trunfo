import React from "react";

export default () => (
  <select
    value={ cardRare }
    data-testid="rare-input"
  >
    <option>normal</option>
    <option>raro</option>
    <option>muito raro</option>
  </select>
);
