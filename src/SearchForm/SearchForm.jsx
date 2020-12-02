/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FilterBox from '../FilterBox/FilterBox';
import SearchBar from '../SearchBar/SearchBar';

class SearchForm extends Component {
  render() {
    return (
      <form className="book__query" onSubmit={(e) => this.props.onFormSubmit(e)}>
        <fieldset>
          <SearchBar
            onQueryInputChange={(termValue) => this.props.onQueryInputChange(termValue)}
            queryTerm={this.props.queryTerm}
          />
          <FilterBox
            onPFChange={(pfValue) => this.props.onPFChange(pfValue)}
            onBTChange={(btValue) => this.props.onBTChange(btValue)}
            printTypeFilter={this.props.printTypeFilter}
            bookTypeFilter={this.props.bookTypeFilter}
          />
        </fieldset>
      </form>
    );
  }
}

export default SearchForm;
