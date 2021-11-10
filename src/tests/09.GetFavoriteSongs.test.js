import { 
  screen,
  waitFor,
} from '@testing-library/react';

import * as musicsAPI from '../services/musicsAPI';
import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import renderPath from './helpers/renderPath';
import { 
  defaultUser,
  musicAPIDefaultResponse,
  favoriteSongsList
} from './mocks';

describe('9 - Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify(favoriteSongsList));
  });

  afterEach(() => localStorage.clear());


  it('Será validado se a requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      const spy = jest.spyOn(favoriteSongsAPI, 'getFavoriteSongs');

      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(spy).toBeCalled();
    });


    it('Será validado se, ao entrar na página, o número de checkboxes marcados como `checked` é correspondente ao número de músicas que já foram favoritadas',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.queryAllByRole('checkbox', { checked: true })).toHaveLength(2);
      expect(screen.getAllByRole('checkbox', { checked: false })).toHaveLength(2);
    });

});
