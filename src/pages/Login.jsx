import React from 'react';
import { createUser } from '../services/userAPI';

const imgFon = 'https://images.vexels.com/media/users/3/203199/isolated/preview/93e9f7dbfc842de939011bc64aa482b6-fones-de-ouvido-totalmente-verdes.png';

// imagem disponivel em https://br.vexels.com/png-svg/previsualizar/203199/fones-de-ouvido-totalmente-verdes

export default class Login extends React.Component {
  constructor() {
    super();
    this.handleImputChange = this.handleImputChange.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.state = {
      name: '',
      loading: false,
    };
  }

  handleImputChange({ target }) {
    const { value } = target;
    this.setState(() => ({
      name: value,
    }));
  }

  async onClickLogin() {
    const { name } = this.state;
    this.setState(() => ({ loading: true }));
    await createUser({ name });
    this.setState(() => ({ loading: false }));
  }

  render() {
    const { loading, name } = this.state;
    return (
      <div className="m-auto py-40 flex h-full w-full items-center justify-center">
        {loading
          ? (
            <div
              data-testid="page-login"
              className="m-auto h-full w-4/5 flex shadow-2xl p-36 rounded-3xl
              transition-shadow duration-250 linear transform hover:scale-1-1"
            >
              <p className="m-auto text-green-800 text-6xl">Carregando...</p>
            </div>)
          : (
            <div
              data-testid="page-login"
              className="m-auto h-full w-4/5 flex shadow-2xl p-12 rounded-3xl
              transition-shadow duration-250 linear transform hover:scale-1-1"
            >
              <div className="grid grid-cols-1 text-center w-2/5">
                <h1 className="m-auto text-green-800 text-2xl">
                  &#127926;ﾠﾠProject TribTunesﾠﾠ&#127911;
                </h1>
                <img src={ imgFon } alt="img_logo" className="m-auto w-3/6" />
              </div>

              <div className="w-3/5 flex justify-center items-center">

                <input
                  type="text"
                  id="nameInput"
                  name="userName"
                  data-testid="login-name-input"
                  className="p-2 px-4 w-full rounded-3xl bg-white border-2 mx-2
                  text-green-800 place-content-start shadow-inner focus:outline-none
                  focus:ring-green-500 focus:border-green-600"
                  placeholder="Informe seu nome..."
                  value={ name }
                  onChange={ this.handleImputChange }
                />

                <button
                  data-testid="login-submit-button"
                  type="button"
                  className="bg-green-600 border-2 rounded-3xl px-8 p-2 text-white"
                  onClick={ this.onClickLogin }
                >
                  Entrar
                </button>
              </div>
            </div>
          )}
      </div>
    );
  }
}
