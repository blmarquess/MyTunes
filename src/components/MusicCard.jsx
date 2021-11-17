import React from 'react';
import PropTypes from 'prop-types';

// controlsList="nodownload" descobri nas respostas do post
// https://www.guj.com.br/t/proteger-videos-html5-contra-download/336829/2
export default class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <dvi
        className="shadow-sm mb-4 w-full flex items-center justify-around
      rounded-full px-10 bg-white"
      >
        <span className="mr-4">{ trackName }</span>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
          controlsList="nodownload"
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <input
          type="checkbox"
          name="favorite"
          className="ml-4"
        />
      </dvi>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};
