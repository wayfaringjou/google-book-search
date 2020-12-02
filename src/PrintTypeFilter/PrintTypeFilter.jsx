/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class PrintTypeFilter extends Component {
  render() {
    return (
      <label htmlFor="print-type">
        Print Type:
        <select
          id="print-type"
          name="print-type"
          value={this.props.printTypeFilter}
          onChange={(e) => this.props.onPFChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </label>
    );
  }
}

export default PrintTypeFilter;
