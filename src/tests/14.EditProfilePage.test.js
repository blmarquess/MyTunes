import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as userAPI from '../services/userAPI';
import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('14 - Crie o formulário de edição de perfil', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se é feita a requisição para getUser para recuperar as informações da pessoa logada',
    async () => {
      const spy = jest.spyOn(userAPI, 'getUser');

      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(spy).toBeCalled();
    });

  it('Será validado se o formulário é renderizado já preenchido com as informações da pessoa logada',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      expect(screen.getByTestId('edit-input-name')).toHaveValue('User Test');
      expect(screen.getByTestId('edit-input-email')).toHaveValue('email@test.com');
      expect(screen.getByTestId('edit-input-description')).toHaveValue('Lorem ipsum');
      expect(screen.getByTestId('edit-input-image')).toHaveValue('url-to-image');
      expect(screen.getByTestId('edit-button-save')).toBeInTheDocument();
    });

  it('Será validado se é possível alterar os valores dos campos',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      const nameInput = screen.getByTestId('edit-input-name');
      userEvent.clear(nameInput);
      userEvent.type(nameInput, 'New user test');

      const emailInput = screen.getByTestId('edit-input-email');
      userEvent.clear(emailInput);
      userEvent.type(emailInput, 'newemail@test.com');

      const descriptionInput = screen.getByTestId('edit-input-description');
      userEvent.clear(descriptionInput);
      userEvent.type(descriptionInput, 'Dolor sit amet');

      const imageInput = screen.getByTestId('edit-input-image');
      userEvent.clear(imageInput);
      userEvent.type(imageInput, 'new-url-to-image');

      expect(nameInput).toHaveValue('New user test');
      expect(emailInput).toHaveValue('newemail@test.com');
      expect(descriptionInput).toHaveValue('Dolor sit amet');
      expect(imageInput).toHaveValue('new-url-to-image');
    });

  it('Será validado se o botão salvar é habilitado somente se todos os campos estiverem válidos',
    async () => {
      localStorage.setItem('user', JSON.stringify({
        name: "User Test", 
        email: "",
        description: "",
        image: ""
      }));
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      const saveButton = screen.getByTestId('edit-button-save');

      const nameInput = screen.getByTestId('edit-input-name');
      userEvent.clear(nameInput);
      userEvent.type(nameInput, '');

      const emailInput = screen.getByTestId('edit-input-email');
      userEvent.clear(emailInput);
      userEvent.type(emailInput, 'not-an-email');

      const descriptionInput = screen.getByTestId('edit-input-description');
      userEvent.clear(descriptionInput);
      userEvent.type(descriptionInput, '');

      const imageInput = screen.getByTestId('edit-input-image');
      userEvent.clear(imageInput);
      userEvent.type(imageInput, '');

      expect(saveButton).toBeDisabled();

      userEvent.type(nameInput, 'User test');
      userEvent.clear(emailInput);
      userEvent.type(emailInput, 'valid@email.com');
      userEvent.type(descriptionInput, 'User description');
      userEvent.type(imageInput, 'image-url');

      expect(saveButton).toBeEnabled();
    });

  it('Será validado se as informações são enviadas usando a API updateUser',
    async () => {
      const spy = jest.spyOn(userAPI, 'updateUser');
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      const nameInput = screen.getByTestId('edit-input-name');
      userEvent.clear(nameInput);
      userEvent.type(nameInput, 'New user test');

      const emailInput = screen.getByTestId('edit-input-email');
      userEvent.clear(emailInput);
      userEvent.type(emailInput, 'newemail@test.com');

      const descriptionInput = screen.getByTestId('edit-input-description');
      userEvent.clear(descriptionInput);
      userEvent.type(descriptionInput, 'Dolor sit amet');

      const imageInput = screen.getByTestId('edit-input-image');
      userEvent.clear(imageInput);
      userEvent.type(imageInput, 'new-url-to-image');

      userEvent.click(screen.getByTestId('edit-button-save'));

      expect(spy).toBeCalledWith({
        name: 'New user test',
        email: 'newemail@test.com',
        description: 'Dolor sit amet',
        image: 'new-url-to-image',
      });
    });

  it('Será validado se após salvar as informações a pessoa é redirecionada para a página de exibição de perfil',
    async () => {
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3000 }
      );

      userEvent.click(screen.getByTestId('edit-button-save'));

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );

      expect(screen.getByText('Editar perfil')).toBeInTheDocument();
      expect(window.location.pathname).toBe('/profile');
    });
});
