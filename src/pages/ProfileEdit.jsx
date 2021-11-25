import React from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';

const styledLabel = 'flex justify-between px-4 py-6 w-full';
const styledInput = `-shadow-lg border-b-2 border-gray-300 rounded-sm
  outline-none w-wull ml-2`;

export default class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, user: '' };
  }

  componentDidMount() { this.getUserInfos(); }

  getUserInfos = async () => {
    const atualInfo = await getUser();
    this.setState(() => ({ ...atualInfo, loading: false }));
  }

  // updateUser()

  render() {
    const { loading, user } = this.state;
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
                      value={ user.name }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>E-Mail:</span>
                    <input
                      type="text"
                      data-testid="edit-input-email"
                      value={ user.email }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>URL Photo:</span>
                    <input
                      type="text"
                      data-testid="edit-input-image"
                      value={ user.image }
                      className={ styledInput }
                    />
                  </section>

                  <section className={ styledLabel }>
                    <span>Descrição:</span>
                    <input
                      type="text"
                      data-testid="edit-input-description"
                      value={ user.description }
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
