import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';

const minNameImput = 3;

const imgFon = 'https://images.vexels.com/media/users/3/203199/isolated/preview/93e9f7dbfc842de939011bc64aa482b6-fones-de-ouvido-totalmente-verdes.png';

// imagem disponivel em https://br.vexels.com/png-svg/previsualizar/203199/fones-de-ouvido-totalmente-verdes

export default class Login extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onEnterImput = this.onEnterImput.bind(this);
    this.state = {
      name: '',
      loading: false,
      redirect: false,
      btnEnterOn: true,
    };
  }

  handleInputChange({ target: { value, name } }) {
    if (value.length >= minNameImput) {
      this.setState(() => ({ [name]: value, btnEnterOn: false }));
    } else {
      this.setState(() => ({ [name]: value, btnEnterOn: true }));
    }
  }

  async onClickLogin() {
    const { name } = this.state;
    this.setState(() => ({ loading: true }));
    await createUser({ name });
    this.setState({ redirect: true, loading: false });
  }

  onEnterImput({ key }) {
    if (key === 'Enter') return this.onClickLogin();
  }

  render() {
    const { loading, name, redirect, btnEnterOn } = this.state;

    if (redirect) return <Redirect to="/search" />;

    return (
      <div
        className="flex h-full w-full justify-center content-center items-center
        align-middle m-auto py-60"
      >
        {loading
          ? (
            <div
              data-testid="page-login"
              className="m-auto h-full w-4/5 flex shadow-xl p-36 rounded-3xl
              transition-shadow duration-250 linear transform hover:scale-1-1 cards"
            >
              <div
                className="loading w-24 h-24 p-24 rounded-full border-l-4 border-r-4
                border-green-800"
              />
              <p className="m-auto text-green-800 text-6xl font-extrabold">
                Carregando...
              </p>
            </div>)
          : (
            <div
              data-testid="page-login"
              className="m-auto h-full w-4/5 flex shadow-xl p-12 rounded-3xl
              transition-shadow duration-250 linear transform hover:scale-1-1 cards
              items-center align-middle self-center"
            >
              <div className="grid grid-cols-1 text-center w-2/5 cards">
                <h1 className="m-auto text-green-800 text-2xl font-semibold">
                  &#127926;ﾠﾠMyTunesﾠﾠ&#127911;
                </h1>
                <img src={ imgFon } alt="img_logo" className="m-auto w-3/6" />
              </div>

              <div className="w-3/5 flex justify-center items-center">

                <input
                  type="text"
                  id="nameInput"
                  name="name"
                  data-testid="login-name-input"
                  className="p-2 px-4 w-full rounded-3xl bg-white border-2 mx-2
                  text-green-800 place-content-start shadow-inner focus:outline-none
                  focus:ring-green-500 focus:border-green-600 font-semibold"
                  placeholder="Informe seu nome..."
                  value={ name }
                  onKeyUp={ this.onEnterImput }
                  onChange={ this.handleInputChange }
                />

                <button
                  data-testid="login-submit-button"
                  type="button"
                  disabled={ btnEnterOn }
                  className="bg-green-600 border-2 rounded-3xl px-8 p-2 text-white
                  font-bold"
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
