/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import BookItem from '../BookItem/BookItem';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class BookList extends Component {
  render() {
    return (
      <section className="books_list">
        <aside className="errors">
          {this.props.error.length > 0 ? this.props.error : ''}
        </aside>
        {this.props.items.length > 0
          ? this.props.items.map((item) => (
            <BookItem
              key={item.id}
              bookTitle={item.volumeInfo.title}
              author={item.volumeInfo.authors}
              description={item.volumeInfo.description}
              link={item.volumeInfo.infoLink}
              image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''}
              price={item.saleInfo.listPrice
                ? USCurrencyFormat.format(item.saleInfo.listPrice.amount)
                : ''}
            />
          ))
          : ''}
      </section>
    );
  }
}

BookList.defaultProps = {
  error: '',
  items: [],
};

export default BookList;
