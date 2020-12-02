/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section className="search__bar">
        <label htmlFor="book-search">
          Search:
          <input
            type="search"
            name="book-search"
            id="book-search"
            placeholder="henry"
            value={this.props.queryTerm}
            onChange={(e) => this.props.onQueryInputChange(e.target.value)}
          />
          <button type="submit">Submit</button>
        </label>
      </section>
    );
  }
}

export default SearchBar;
