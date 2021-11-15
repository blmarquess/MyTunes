import React from 'react';

const imgFon = 'https://images.vexels.com/media/users/3/203199/isolated/preview/93e9f7dbfc842de939011bc64aa482b6-fones-de-ouvido-totalmente-verdes.png';

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

  onClickLogin() { }

  render() {
    return (
      <div className="m-auto p-20 flex h-full w-full items-center justify-center">
        <div
          data-testid="page-login"
          className="m-auto h-4/5 w-4/5 flex shadow-2xl p-16 rounded-3xl"
        >
          <div className="m-auto grid grid-cols-1 text-center">
            <h1>&#127926; Project TribTunes &#127911; </h1>
            <img src={ imgFon } alt="img_logo" className="m-auto w-3/5 text-blue-700" />
          </div>
          <div className="mx-auto flex justify-center items-center">
            <imput
              type="text"
              data-testid="login-name-input"
              className="p-5 rounded-3xl w-96 bg-white border-2 mx-2
              text-gray-400 place-content-start"
              placeholder="Enter your name"
              onChange={ this.handleImputChange }
            />
            <button
              data-testid="login-submit-button"
              type="button"
              className="bg-green-700 border-2 rounded-3xl px-8 py-2 text-white"
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
