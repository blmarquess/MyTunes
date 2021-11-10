import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('5 - Crie o formulário para pesquisar artistas', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    jest.restoreAllMocks();
  });

  afterEach(() => localStorage.clear());
  
  it('Será validado se ao navegar para a rota /search, o input e o botão estão presentes na tela',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('search-artist-input')).toBeInTheDocument();
      expect(screen.getByTestId('search-artist-button')).toBeInTheDocument();
    });

  it('Será validado se o botão está habilitado somente se o input de nome tiver 2 ou mais caracteres',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      const searchArtistInput = screen.getByTestId('search-artist-input');
      expect(searchArtistInput).toBeInTheDocument();
      expect(searchArtistInput.value).toBe('');

      const searchArtistButton = screen.getByTestId('search-artist-button');
      expect(searchArtistButton).toBeInTheDocument();
      expect(searchArtistButton).toBeDisabled();

      userEvent.type(searchArtistInput, 'U');
      expect(searchArtistInput.value).toBe('U');
      expect(searchArtistButton).toBeDisabled();

      userEvent.type(searchArtistInput, '2');
      expect(searchArtistInput.value).toBe('U2');
      expect(searchArtistButton).toBeEnabled();
    });
});
