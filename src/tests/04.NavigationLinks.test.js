import { 
  screen,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as musicsAPI from '../services/musicsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse} from './mocks';


describe('4 - Crie os links de navegação no cabeçalho', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
    jest.restoreAllMocks();
  });

  afterEach(() => localStorage.clear());

  // Search page
  it('Será validado se os links de navegação são exibidos na página de pesquisa',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
    });

  it('Será validado se a navegação entre a página de pesquisa e a página de músicas favoritas ocorre corretamente',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-favorites'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/favorites');
    });

  it('Será validado se a navegação entre a página de pesquisa e a página de exibição do perfil ocorre corretamente',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-profile'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/profile');
    });
    
  // Album page
  it('Será validado se os links de navegação são exibidos na página do álbum',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
    });

  it('Será validado se a navegação entre a página do álbum e a página de pesquisa ocorre corretamente',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-search'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se a navegação entre a página do álbum e a página de músicas favoritas ocorre corretamente',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-favorites'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/favorites');
    });

  it('Será validado se a navegação entre a página do álbum e a página de exibição do perfil ocorre corretamente',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-profile'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/profile');
    });

  // Favorites page
  it('Será validado se os links de navegação são exibidos na página de músicas favoritas',
    async () => {
      renderPath("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
    });

  it('Será validado se a navegação entre a página de músicas favoritas e a página de pesquisa ocorre corretamente',
    async () => {
      renderPath("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-search'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se a navegação entre a página de músicas favoritas e a página de exibição perfil ocorre corretamente',
    async () => {
      renderPath("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-profile'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/profile');
    });

  // Profile page
  it('Será validado se os links de navegação são exibidos na página de exibição do perfil',
    async () => {
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
    });

  it('Será validado se a navegação entre a página de exibição do perfil e a página de pesquisa ocorre corretamente',
    async () => {
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-search'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se a navegação entre a página de exibição do perfil e a página de músicas favoritas ocorre corretamente',
    async () => {
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-favorites'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/favorites');
    });

  // Edit profile page  
  it('Será validado se os links de navegação são exibidos na página de edição do perfil',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
    });

  it('Será validado se a navegação entre a página de edição do perfil e a página de pesquisa ocorre corretamente',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-search'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se a navegação entre a página de edição do perfil e a página de músicas favoritas ocorre corretamente',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-favorites'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/favorites');
    });

  it('Será validado se a navegação entre a página de edição do perfil e a página de exibição do perfil ocorre corretamente',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('link-to-profile'));
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(window.location.pathname).toBe('/profile');
    });
});
