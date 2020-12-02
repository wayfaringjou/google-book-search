/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class BookItem extends Component {
  render() {
    return (
      <article className="book_item">
        <a href={this.props.link} target="_blank" rel="noreferrer">
          <img src={this.props.image} alt={this.props.bookTitle} />
        </a>
        <h3>{this.props.bookTitle}</h3>
        <h4>{this.props.author}</h4>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

BookItem.defaultProps = {
  link: '',
  image: '',
  bookTitle: '',
  author: '',
  price: '',
  description: '',
};

export default BookItem;
