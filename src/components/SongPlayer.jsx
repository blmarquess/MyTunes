import React from 'react';

export default () => (
  <audio data-testid="audio-component" src="{ previewUrl }" controls>
    <track kind="captions" />
    O seu navegador não suporta o elemento
    <code>audio</code>
  </audio>
);
