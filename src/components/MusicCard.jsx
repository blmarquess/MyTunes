import React from 'react';
import PropTypes from 'prop-types';

// controlsList="nodownload" descobri nas respostas do post
// https://www.guj.com.br/t/proteger-videos-html5-contra-download/336829/2
export default class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, trackId } = this.props;
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
        <label htmlFor={ trackId } className="favorite">
          Favorita
          <input
            id={ trackId }
            type="checkbox"
            name="favorite"
            className="mx-4"
            data-testid={ `checkbox-music-${trackId}` }
          />
          &#9734;
        </label>
      </dvi>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
