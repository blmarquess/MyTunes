import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends React.Component {
  constructor() {
    super();
    this.OnOffStared = this.OnOffStared.bind(this);
    this.getMyStareds = this.getMyStareds.bind(this);
    this.state = {
      albumData: [],
      artistName: '',
      albumName: '',
      artworkUrl100: '',
      loading: false,
      favorites: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id: albumId } } } = this.props;

    // treixo do getMusics copiado da branch #8 -> Israel Santana
    // the my mind went blank fil a moment
    getMusics(albumId)
      .then((data) => {
        const {
          artistName,
          artworkUrl100,
          collectionName: albumName,
        } = data[0];
        this.setState(() => ({
          albumData: data,
          artistName,
          albumName,
          artworkUrl100,
        }));
      });
    this.getMyStareds();
  }

  componentDidUpdate() {
    this.getMyStareds();
    // const stared = favorites.this.state;
  }

  async getMyStareds() {
    const sounds = await getFavoriteSongs();
    this.setState(() => ({ favorites: sounds }));
  }

  async OnOffStared(sond, event) {
    console.log(event);
    this.setState(() => ({ loading: true }));
    // if (isFavorite(sond)) {
    await addSong(sond);
    this.setState({ loading: false });
    // } else {
    // await removeSong(sond);
    this.setState({ loading: false });
    // }
  }

  render() {
    const {
      albumData,
      artistName,
      albumName,
      artworkUrl100,
      favorites,
      loading } = this.state;

    return (
      <div>
        <Header />
        <section
          data-testid="page-album"
          className="flex flex-row flex-wrap  justify-around
          md:justify-center items-start mt-16"
        >
          <section className="mx-auto container">
            <div className="w-72 h-96 grid grid-cols-1 mb-8">
              <img
                src={ artworkUrl100 }
                alt="Capa do Album"
                className="object-cover h-72 w-full shadow-lx"
              />
              <span
                className="text-lg font-semibold my-4"
                data-testid="album-name"
              >
                { albumName }
              </span>
              <span className="text-md" data-testid="artist-name">{ artistName }</span>
            </div>
          </section>
          <section className="mx-auto">
            <div className="w-full">
              {loading ? (
                <div className="flex p-4 space-x-2 pulse text-xl items-center">
                  <div
                    className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
                  />
                  <p>Carregando...</p>
                </div>)
                : (
                  albumData.filter(({ kind }) => kind)
                    .map((song) => (
                      <div key={ song.trackId }>
                        <MusicCard
                          favorited={ favorites
                            .some(({ trackId }) => trackId === song.trackId) }
                          OnOffStared={ () => this.OnOffStared(song) }
                          { ...song }
                        />
                      </div>))
                )}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
};
