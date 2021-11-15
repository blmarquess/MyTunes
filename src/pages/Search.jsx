import React from 'react';
import Header from '../components/Header';

export default class Search extends React.Component {
  constructor() {
    super();
    this.onChangeInputsearch = this.onChangeInputsearch.bind(this);
    this.pesquisar = this.pesquisar.bind(this);
    this.state = { itenSearch: '', onSearch: true };
  }

  onChangeInputsearch({ target: { value } }) {
    if (value.length >= 2) {
      this.setState(() => ({ itenSearch: value, onSearch: false }));
    } else {
      this.setState(() => ({ itenSearch: value, onSearch: true }));
    }
  }

  pesquisar() {
    const { itenSearch } = this.state;
    console.log(itenSearch);
  }

  render() {
    const { onSearch, itenSearch } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-search">
          <div>
            <input
              type="text"
              data-testid="search-artist-input"
              value={ itenSearch }
              onChange={ this.onChangeInputsearch }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ onSearch }
              onClick={ this.pesquisar }
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
