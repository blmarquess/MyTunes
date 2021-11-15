import React from 'react';
import Header from '../components/Header';
import SearchIcon from '../components/IconSearch';

export default class Search extends React.Component {
  constructor() {
    super();
    this.onChangeInputsearch = this.onChangeInputsearch.bind(this);
    this.pesquisar = this.pesquisar.bind(this);
    this.state = { itenSearch: '', onSearch: true, loading: true };
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
    const { onSearch, itenSearch, loading } = this.state;
    return (
      <div>
        <Header />
        <div
          data-testid="page-search"
          className="flex w-full justify-center items-center my-40"
        >
          {loading ? <p className="loading">Carregando...</p>
            : (
              <div
                className="m-auto flex border-2 border-green-400
                  rounded-full pr-4 pl-0 bg-green-500 text-white font-bold"
              >
                <input
                  type="text"
                  data-testid="search-artist-input"
                  className="py-4 pl-10 pr-20 border-0 rounded-l-full mr-0 my-0
                  text-green-900 outline-none  shadow-inner"
                  placeholder="Procure sua musica .."
                  value={ itenSearch }
                  onChange={ this.onChangeInputsearch }
                />
                <div className="flex items-center m-0">
                  <SearchIcon />
                  <button
                    className="ml-8 mr-2"
                    type="button"
                    data-testid="search-artist-button"
                    disabled={ onSearch }
                    onClick={ this.pesquisar }
                  >
                    Pesquisar
                  </button>
                </div>
              </div>)}
        </div>
        <article>
          <p>Por enquanto fica ai!</p>
        </article>
      </div>
    );
  }
}
