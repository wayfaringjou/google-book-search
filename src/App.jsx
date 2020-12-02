/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryTerm: '',
      printTypeFilter: 'all',
      bookTypeFilter: 'None',
      items: [],
      error: '',
    };
  }

  queryTermChanged(termValue) {
    this.setState({
      queryTerm: termValue,
    });
  }

  printFilterChanged(pfValue) {
    this.setState({
      printTypeFilter: pfValue,
    });
  }

  bookTypeChanged(btValue) {
    this.setState({
      bookTypeFilter: btValue,
    });
  }

  querySubmit(e) {
    e.preventDefault();
    const filter = this.state.bookTypeFilter !== 'None' ? `&filter=${this.state.bookTypeFilter}` : '';
    const query = this.state.queryTerm;
    const pType = this.state.printTypeFilter;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${pType}${filter}&key=AIzaSyAaLld1xEfAaAezgYegGcCqMy3yuRw-OXY`;
    const options = {
      method: 'GET',
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: [...data.items],
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm
          onQueryInputChange={(termValue) => this.queryTermChanged(termValue)}
          onPFChange={(pfValue) => this.printFilterChanged(pfValue)}
          onBTChange={(btValue) => this.bookTypeChanged(btValue)}
          onFormSubmit={(e) => this.querySubmit(e)}
          queryTerm={this.state.queryTerm}
          printTypeFilter={this.state.printTypeFilter}
          bookTypeFilter={this.state.bookTypeFilter}
        />
        <BookList
          items={this.state.items}
          error={this.state.error}
        />
      </main>
    );
  }
}

export default App;
