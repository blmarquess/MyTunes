import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

const previewUrl = 'https://media.gettyimages.com/photos/an-artwork-issued-from-the-album-cover-the-wall-released-in-1979-is-picture-id862122228?s=612x612';

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
          collectionName: albumName,
          artworkUrl100,
        } = data[0];
        this.setState({
          albumData: data,
          artistName,
          albumName,
        });
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
            <div className="w-72 h-96">
              <img
                src={ artworkUrl100 }
                alt="Capa do Album"
                className="object-cover h-72 w-full shadow-lx"
              />
              <span className="text-2xl font-semibold">{ albumName }</span>
              <p className="text-sm">{ artistName }</p>
            </div>
          </section>
          <section className="mx-auto">
            <div className="w-full">
              {/* {albumData.map(album)=>() } */}

              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

MusicCard.propTypes = {
  match: PropTypes.string.isRequired,
};
