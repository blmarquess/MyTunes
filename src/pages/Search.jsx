import React from 'react';
import Header from '../components/Header';
import SearchIcon from '../components/IconSearch';

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
        <div
          data-testid="page-search"
          className="flex w-full justify-center items-center my-40"
        >
          <div
            className="m-auto flex border-2 border-green-400 rounded-full pr-4 pl-0
          bg-green-500 text-white font-bold"
          >
            <input
              type="text"
              data-testid="search-artist-input"
              className="py-2 pl-10 pr-20 border-0 rounded-l-3xl mr-0 text-green-900
              outline-none focus:hover-green-700"
              placeholder="Procure sua musica .."
              value={ itenSearch }
              onChange={ this.onChangeInputsearch }
            />
            <div className="flex items-center m-0">
              <SearchIcon />
              <button
                className="ml-4"
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
      </div>
    );
  }
}
