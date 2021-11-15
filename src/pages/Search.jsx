import React from 'react';
import Header from '../components/Header';

export default class Search extends React.Component {
  constructor() {
    super();
    this.onChangeInputsearch = this.onChangeInputsearch.bind(this);
    this.onChangeInputsearch = this.onChangeInputsearch.bind(this);
    this.state = { itenSearch: '', onSearch: false };
  }

  onChangeInputsearch() { }

  onChangeInputsearch(){ return null; }

  render() {
    const { onSearch } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-search">
          <div>
            <input
              type="text"
              data-testid="search-artist-input"
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
