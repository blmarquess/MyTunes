import { screen,
  waitFor, 
  waitForElementToBeRemoved 
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as userAPI from '../services/userAPI';
import renderPath from './helpers/renderPath';

describe('2 - Crie um formulário para identificação', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('Será validado se ao navegar para a rota /, o input e o botão especificados estão presentes',
    async () => {
      renderPath("/");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );
        
      expect(screen.getByTestId('login-name-input')).toBeInTheDocument();
      expect(screen.getByTestId('login-submit-button')).toBeInTheDocument();
    });

  it('Será validado se o botão só é habilitado se o input de nome tiver 3 ou mais caracteres',
    async () => {
      renderPath("/");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      const loginNameInput = screen.getByTestId('login-name-input');
      expect(loginNameInput).toBeInTheDocument();
      expect(loginNameInput.value).toBe('');
      
      const loginSubmitButton = screen.getByTestId('login-submit-button');
      expect(loginSubmitButton).toBeInTheDocument();
      expect(loginSubmitButton).toBeDisabled();
      
      userEvent.type(loginNameInput, 'N');
      expect(loginNameInput.value).toBe('N');
      expect(loginSubmitButton).toBeDisabled();

      userEvent.type(loginNameInput, 'a');
      expect(loginNameInput.value).toBe('Na');
      expect(loginSubmitButton).toBeDisabled();

      userEvent.type(loginNameInput, 'm');
      expect(loginNameInput.value).toBe('Nam');
      expect(loginSubmitButton).toBeEnabled();

      userEvent.type(loginNameInput, 'e');
      expect(loginNameInput.value).toBe('Name');
      expect(loginSubmitButton).toBeEnabled();
    });

  it('Será validado se ao clicar no botão habilitado, a função createUser da userAPI é chamada',
    async () => {
      const spy = jest.spyOn(userAPI, 'createUser');

      renderPath("/");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.type(screen.getByTestId('login-name-input'), 'Name');
      userEvent.click(screen.getByTestId('login-submit-button'));

      const storedUserName = JSON.parse(localStorage.getItem('user')).name;
      expect(storedUserName).toBe('Name');
      expect(spy).toBeCalled();
    });

  it('Será validado se ao clicar no botão, a mensagem Carregando... é exibida e após a resposta da API acontece o redirecionamento para a rota /search',
    async () => {
      renderPath("/");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );
  
      userEvent.type(screen.getByTestId('login-name-input'), 'Name');
      userEvent.click(screen.getByTestId('login-submit-button'));
  
      const loadingElement = screen.getByText('Carregando...');
      expect(loadingElement).toBeInTheDocument();
  
      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3500 },
      );
      expect(loadingElement).not.toBeInTheDocument();

      expect(window.location.pathname).toBe('/search');
    });
});
