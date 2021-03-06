import React from 'react';
import { Link } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import SearchIcon from '../components/IconSearch';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

const gridResultados = 'flex flex-wrap p-10 mx-auto my-4';

export default class Search extends React.Component {
  constructor() {
    super();
    this.onChangeInputsearch = this.onChangeInputsearch.bind(this);
    this.pesquisar = this.pesquisar.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.state = {
      itenSearch: '',
      onSearch: true,
      loading: false,
      toQuery: '',
      atuaQuery: [],
    };
  }

  onChangeInputsearch({ target: { value } }) {
    if (value.length >= 2) {
      this.setState(() => ({ itenSearch: value, onSearch: false, toQuery: value }));
    } else {
      this.setState(() => ({ itenSearch: value, onSearch: true, toQuery: value }));
    }
  }

  async pesquisar() {
    const { itenSearch } = this.state;
    this.setState(() => ({ loading: true }));
    const newQuery = await searchAlbumsAPIs(itenSearch);
    if (newQuery.length !== 0) {
      this.setState(() => ({
        itenSearch: '', onSearch: true, loading: false, atuaQuery: newQuery,
      }));
    } else {
      this.setState(() => ({ itenSearch: '', onSearch: true, loading: false }));
    }
  }

  pressEnter({ key }) {
    if (key === 'Enter') return this.pesquisar();
  }

  render() {
    const { onSearch, itenSearch, loading, atuaQuery, toQuery } = this.state;
    return (
      <div>
        <Header />
        <div
          data-testid="page-search"
          className="flex w-full justify-center items-center mt-40"
        >
          {loading
            ? (
              <div className="flex p-4 space-x-2 pulse text-xl items-center">
                <div
                  className="loading h-8 w-8 rounded-full border-l-2
                border-green-800"
                />
                <p>Carregando...</p>
              </div>)
            : (
              <div
                className="mx-auto flex border-2 border-green-400
                  rounded-full pr-4 pl-0 bg-green-500 text-white font-bold"
              >
                <input
                  type="text"
                  data-testid="search-artist-input"
                  className="py-4 pl-10 pr-20 border-0 rounded-full mr-0 my-0
                  text-green-900 outline-none  shadow-inner"
                  placeholder="Procure sua musica .."
                  onKeyUp={ this.pressEnter }
                  value={ itenSearch }
                  onChange={ this.onChangeInputsearch }
                />
                <div className="flex items-center m-0">
                  <button
                    type="button"
                    data-testid="search-artist-button"
                    disabled={ onSearch }
                    onClick={ this.pesquisar }
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>)}
        </div>
        <section
          className="flex flex-wrap p-10 mx-auto my-1
        justify-center items-center text-center"
        >
          {atuaQuery.length === 0
            ? (<p>Nenhum ??lbum foi encontrado</p>)
            : (
              <section
                lassName="flex flex-wrap p-10 mx-auto my-4 justify-center items-center"
              >
                <span
                  className="inline text-center text-xl font-black text-green-900"
                >
                  {`Resultado de ??lbuns de: ${toQuery}`}
                </span>
                <div className={ gridResultados }>
                  {atuaQuery.map((album) => (
                    <Link
                      to={ {
                        pathname: `/album/${album.collectionId}`,
                        state: `${album.collectionId}`,
                      } }
                      data-testid={ `link-to-album-${album.collectionId}` }
                      key={ album.collectionId }
                      name={ album.collectionName }
                    >
                      <AlbumCard { ...album } />

                    </Link>
                  ))}
                </div>
              </section>)}
        </section>
      </div>
    );
  }
}
