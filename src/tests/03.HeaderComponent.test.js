import { 
  screen,
  waitFor,
  waitForElementToBeRemoved 
} from '@testing-library/react';

import * as userAPI from '../services/userAPI';
import * as musicsAPI from '../services/musicsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse} from './mocks';

describe('3 - Crie um componente de cabeçalho', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
    jest.restoreAllMocks();
  });

  afterEach(() => localStorage.clear());

  it('Será validado se o componente Header é renderizado na página /search',
    async () => {
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId("header-component")).toBeInTheDocument();  
    });

  it('Será validado se o componente Header é renderizado na página /album/:id',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/123");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId("header-component")).toBeInTheDocument();  
    });   
    
  it('Será validado se o componente Header é renderizado na página /favorites',
    async () => {
      renderPath("/favorites");
  
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );
  
      expect(screen.getByTestId("header-component")).toBeInTheDocument();
    });

  it('Será validado se o componente Header é renderizado na página /profile',
    async () => {
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId("header-component")).toBeInTheDocument();
    });

  it('Será validado se o componente Header é renderizado na página /profile/edit',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId("header-component")).toBeInTheDocument();
    });

  it('Será validado se a função getUser é chamada ao renderizar o componente',
    async () => {
      const spy = jest.spyOn(userAPI, 'getUser');
      renderPath("/search");


      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(spy).toHaveBeenCalled();
    });

  it('Será validado se a mensagem de Carregando... é exibida ao renderizar o componente e é removida após o retorno da API',
    async () => {
      renderPath("/search");

      expect(screen.getByText('Carregando...')).toBeInTheDocument();
      
      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.queryAllByText("Carregando...")).toHaveLength(0);
    });

  it('Será validado se o nome da pessoa usuária está presente na tela após o retorno da API',
    async () => {
      renderPath("/search");

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      const headerUserName = screen.getByTestId('header-user-name');
      expect(headerUserName).toBeInTheDocument();

      expect(headerUserName.textContent).toContain('User Test');
    });
    
});
