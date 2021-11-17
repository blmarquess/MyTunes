import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

export default class Album extends React.Component {
  constructor() {
    super();
    this.getAlbumById = this.getAlbumById.bind(this);
    this.state = {
      albumData: [],
      artistName: '',
      albumName: '',
      artworkUrl100: '',
      // loading: false,
      // favorites: ['favorite', 'songs'],
    };
  }

  componentDidMount() {
    const { match: { params: { id: albumId } } } = this.props;

    // treixo de 26 a 39 do copiado da branch #8 -> Israel Santana
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
  }

  getAlbumById(id) {
    const album = getMusics(id);
    console.log(album);
  }

  render() {
    const { albumData, artistName, albumName, artworkUrl100 } = this.state;

    return (
      <div>
        <Header />
        <section
          data-testid="page-album"
          className="flex flex-row flex-wrap  justify-around
          md:justify-center items-start mt-16"
        >
          <section className="mx-auto container">
            <div className="w-72 h-96 grid grid-cols-1">
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
              { albumData.map((song) => (
                <div key={ song.trackCount }>
                  <MusicCard
                    trackName={ song.trackName }
                    previewUrl={ song.previewUrl }
                  />
                </div>
              )) }
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
