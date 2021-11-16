import React from 'react';

const previewUrl = 'https://media.gettyimages.com/photos/an-artwork-issued-from-the-album-cover-the-wall-released-in-1979-is-picture-id862122228?s=612x612';

export default () => (
  <dvi className="shadow-xl w-full bg-black">
    <audio data-testid="audio-component" src={ previewUrl } controls download="false">
      <track kind="captions" />
      O seu navegador não suporta o elemento
      <code>audio</code>
    </audio>
  </dvi>
);
