/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class BookTypeFilter extends Component {
  render() {
    return (
      <label htmlFor="book-type">
        Book Type:
        <select
          id="book-type"
          name="book-type"
          value={this.props.bookTypeFilter}
          onChange={(e) => this.props.onBTChange(e.target.value)}
        >
          <option value="None">No Filter</option>
          {this.props.options
            .map((option, index) => <option value={option} key={`opt${index}`}>{option}</option>)}
        </select>
      </label>
    );
  }
}

BookTypeFilter.defaultProps = {
  options: ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'],
};

export default BookTypeFilter;
