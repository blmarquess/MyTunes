import React from 'react';

const previewUrl = 'https://media.gettyimages.com/photos/an-artwork-issued-from-the-album-cover-the-wall-released-in-1979-is-picture-id862122228?s=612x612';

export default () => (
  <dvi
    className="shadow-sm mb-4 w-full flex items-center justify-around
  rounded-full px-10 bg-white"
  >
    <span className="mr-4">track name</span>
    <audio data-testid="audio-component" src={ previewUrl } controls download="false">
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
