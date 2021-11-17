import React from 'react';
import PropTypes from 'prop-types';

export default class AlbumCard extends React.Component {
  render() {
    const {
      artistId,
      artistName,
      collectionName,
      artworkUrl100,
    } = this.props;

    return (
      <section
        id={ artistId }
        className="grid grid-cols-1 m-6 w-44 h-64 text-xs bg-white border-1
        rounded-md shadow-lg"
      >
        <div>
          <img
            className="object-contain w-full"
            src={ artworkUrl100 }
            alt={ `Capa do album ${collectionName}` }
          />
        </div>
        <div data-testid="artist-name" className="p-2">{ artistName }</div>
        <div
          data-testid="album-name"
          className="p-2 overflow-auto text-xs font-extralight"
        >
          { collectionName }
        </div>
      </section>
    );
  }
}

AlbumCard.propTypes = {
  artistId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};
