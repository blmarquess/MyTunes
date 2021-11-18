import React from 'react';
import PropTypes from 'prop-types';

// controlsList="nodownload" descobri nas respostas do post
// https://www.guj.com.br/t/proteger-videos-html5-contra-download/336829/2
export default class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, trackId, OnOffStared, favorited } = this.props;

    return (
      <dvi
        className="shadow-sm mb-4 w-full flex items-center justify-between
      rounded-full px-10 bg-white"
      >
        <span
          className="mr-4 lg:w-40 sm:w-auto xs:w-auto text-xs font-medium"
        >
          { trackName }
        </span>
        <audio
          id="player"
          data-testid="audio-component"
          src={ previewUrl }
          controls
          controlsList="nodownload"
          className="p-0 w-max-28"
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          htmlFor={ trackId }
          className="favorite checked:bg-yellow-500 flex m-0 items-center cursor-pointer"
        >
          <p>Favorita</p>
          <input
            id={ trackId }
            onChange={ OnOffStared }
            type="checkbox"
            checked={ favorited }
            name="favorite"
            className="m-0 aparence-none h-4 w-4 border-2 ml-2"
            data-testid={ `checkbox-music-${trackId}` }
          />
          <span className="text-gray-200 mx-2 check">&#9733;</span>
        </label>
      </dvi>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  OnOffStared: PropTypes.func.isRequired,
  favorited: PropTypes.bool.isRequired,
};
