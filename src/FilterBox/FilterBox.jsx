/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PrintTypeFilter from '../PrintTypeFilter/PrintTypeFilter';
import BookTypeFilter from '../BookTypeFilter/BookTypeFilter';

class FilterBox extends Component {
  render() {
    return (
      <section className="filterbox">
        <PrintTypeFilter
          onPFChange={(pfValue) => this.props.onPFChange(pfValue)}
          printTypeFilter={this.props.printTypeFilter}
        />
        <BookTypeFilter
          onBTChange={(btValue) => this.props.onBTChange(btValue)}
          bookTypeFilter={this.props.bookTypeFilter}
        />
      </section>
    );
  }
}

export default FilterBox;
