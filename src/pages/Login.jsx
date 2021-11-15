import React from 'react';

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

  onClickLogin() {
    const { atualUser } = this.state.name;
    this.setState(() => ({
      loading: true,
    }));
    createUser({ name: atualUser });
  }

  render() {
    return (
      <div className="m-auto py-40 flex h-full w-full items-center justify-center">
        <div
          data-testid="page-login"
          className="m-auto h-full w-4/5 flex shadow-2xl p-16 rounded-3xl"
        >
          <div className="grid grid-cols-1 text-center w-2/5">
            <h1>&#127926; Project TribTunes &#127911; </h1>
            <img src={ imgFon } alt="img_logo" className="m-auto w-3/5" />
          </div>

          <div className="w-3/5 flex justify-center items-center">

            <imput
              type="text"
              name="userName"
              data-testid="login-name-input"
              className="p-5 px-4 w-full rounded-3xl bg-white border-2 mx-2
              text-gray-400 place-content-start shadow-inner"
              placeholder="Enter your name"
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
      </div>
    );
  }
}
