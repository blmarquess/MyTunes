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
      songs: [],
      artistName: '',
      albumName: '',
      // loading: false,
      // favorites: ['favorite', 'songs'],
    };
  }

  componentDidMount() {
    const { match: { params: { id: albumId } } } = this.props;
    console.log(albumId);
    getMusics(albumId)
      .then((songs) => {
        const {
          artistName,
          collectionName: albumName,
        } = songs[0];
        this.setState({
          songs,
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
    const { songs, artistName, albumName, } = this.props.location;

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
                src={ previewUrl }
                alt=""
                className="object-cover h-72 w-full shadow-lx"
              />
              <span className="text-2xl font-semibold">{ albumName }</span>
              <p className="text-sm">{ artistName }</p>
            </div>
          </section>
          <section className="mx-auto">
            <div className="w-full">
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
  state: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
