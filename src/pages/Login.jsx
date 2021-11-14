import React from 'react';

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
      <div
        data-testid="page-login"
        className="mx-auto mt-4 flex justify-center items-center w-11/12"
      >
        <div className="mx-auto grid col-1">
          <h1>&#127926; Project TribTunes &#127911; </h1>
          <img src="#" alt="img_logo" />
        </div>
        <div className="container flex justify-center items-center">
          <imput
            type="text"
            data-testid="login-name-input"
            className="p-4 rounded-3xl w-full bg-white border-2"
            onChange={ this.handleImputChange }
          />
          <button
            data-testid="login-submit-button"
            type="button"
            className="bg-blue-600 border-2 rounded-3xl px-4 py-2 text-white"
            onClick={ this.onClickLogin }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}
