import React from 'react';
import PropTypes from 'prop-types';

export default class AlbumCard extends React.Component {
  render() {
    const {
      artistId,
      artistName,
      collectionName,
      collectionPrice,
      artworkUrl100,
      trackCount,
      collectionId,
    } = this.props;

    return (
      <section id={ artistId } data-testid={ `link-to-album-${collectionId}` }>
        <div><img src={ artworkUrl100 } alt={ `Capa do album ${collectionName}` } /></div>
        <div>{ collectionName }</div>
        <div>{ artistName }</div>
        <div>{ collectionPrice }</div>
        <div>{ trackCount }</div>
      </section>
    );
  }
}

AlbumCard.propTypes = {
  artistId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionPrice: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  trackCount: PropTypes.number.isRequired,
};
