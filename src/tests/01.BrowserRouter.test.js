import { screen, waitFor} from '@testing-library/react';

import * as musicsAPI from '../services/musicsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse } from './mocks';


describe('1 - Crie as rotas necessárias para a aplicação', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
    jest.restoreAllMocks();
  });

  it('Será validado que rota / é uma rota existente e que ela renderiza com data-testid page-login ser acessada',
    async () => {
      localStorage.clear();
      renderPath("/");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );
        
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
  });

  it('Será validado que rota /search é uma rota existente e que ela renderiza o componente com data-testid page-search',
  async () => {
    renderPath("/search");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );
      
    expect(screen.getByTestId('page-search')).toBeInTheDocument();
  });

  it('Será validado que rota /album/:id é uma rota existente e que ela renderiza o componente com data-testid page-album',
  async () => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    jest.spyOn(musicsAPI, 'default').mockImplementation(
      () => Promise.resolve(musicAPIDefaultResponse),
    );

    renderPath("/album/12");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3500 }
    );
      
    expect(screen.getByTestId('page-album')).toBeInTheDocument();
  });

  it('Será validado que rota /favorites é uma rota existente e que ela renderiza o componente com data-testid page-favorites',
  async () => {
    localStorage.setItem('favorite_songs', JSON.stringify([]));

    renderPath("/favorites");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );
      
    expect(screen.getByTestId('page-favorites')).toBeInTheDocument();
  });

  it('Será validado que rota /profile é uma rota existente e que ela renderiza o componente com data-testid page-profile',
  async () => {
    renderPath("/profile");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );
      
    expect(screen.getByTestId('page-profile')).toBeInTheDocument();
  });

  it('Será validado que rota /profile/edit é uma rota existente e que ela renderiza o componente com data-testid page-profile-edit',
  async () => {
    renderPath("/profile/edit");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );
      
    expect(screen.getByTestId('page-profile-edit')).toBeInTheDocument();
  });

  it('Será validado se existe uma página para rotas não mapeadas e que renderiza um componente com o data-testid com valor page-not-found',
  async () => {
    renderPath("/page/not/found");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );
      
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
  });
});
