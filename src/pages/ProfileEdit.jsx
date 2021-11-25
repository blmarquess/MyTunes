import React from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';

const styledLabel = 'flex justify-between px-4 py-6 w-full';
const styledInput = `-shadow-lg border-b-2 border-gray-300 rounded-sm
  outline-none w-wull ml-2`;

export default class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() { this.getUserInfos(); }

  getUserInfos = async () => {
    const atualInfo = await getUser();
    this.setState(() => ({ ...atualInfo, loading: false }));
  }

  // regex obitido em https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
  // Bem estruturado mais não passo na estetica do lint
  // const w3cVmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
  // [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  isValidEmail = (email) => {
    const dotCom = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\?$/i;
    const dotComBr = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return dotCom.test(email) || dotComBr.test(email);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(dotComBr.test(value));
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { name, email, description, image, loading } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-profile-edit">
          {loading ? (
            <div
              className="flex justify-center p-4 space-x-2 pulse text-xl
            items-center"
            >
              <div
                className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
              />
              <p>Carregando...</p>
            </div>)

            : (
              <section className="flex justify-center items-center mt-16 p-8">
                <section
                  className="grid grid-cols-1 p-8 rounded-lg w-wull gap-2
                justify-between items-center bg-white shadow-md"
                >
                  <section className={ styledLabel }>
                    <span>Usuario:</span>
                    <input
                      type="text"
                      data-testid="edit-input-name"
                      name="name"
                      onChange={ this.handleChange }
                      value={ name }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>E-Mail:</span>
                    <input
                      type="text"
                      data-testid="edit-input-email"
                      name="email"
                      onChange={ this.handleChange }
                      value={ email }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>URL Photo:</span>
                    <input
                      type="text"
                      data-testid="edit-input-image"
                      name="image"
                      onChange={ this.handleChange }
                      value={ image }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>Descrição:</span>
                    <input
                      type="text"
                      data-testid="edit-input-description"
                      name="description"
                      onChange={ this.handleChange }
                      value={ description }
                      className={ styledInput }
                    />
                  </section>

                  <div
                    data-testid="edit-button-save"
                    className="py-2 px-8 rounded-md bg-green-600 text-white font-bold
                ml-2 mr-0 text-center"
                  >
                    Salvar
                  </div>
                </section>
              </section>
            )}
        </div>
      </div>
    );
  }
}
