import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getProfileInfos();
  }

  getProfileInfos = async () => {
    const user = await getUser();
    this.setState(() => ({ user, loading: false }));
  }

  render() {
    const { user: {
      name,
      email,
      description,
      image,
    }, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? (
          <div className="flex p-4 space-x-2 pulse text-xl items-center">
            <div
              className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
            />
            <p>Carregando...</p>
          </div>)

          : (
            <section>
              <div>
                <section
                  className="container flex
                justify-center items-center bg-gray-200"
                >
                  <div>
                    <img
                      data-testid="profile-image"
                      src={ image }
                      alt={ `Imagem do usuario ${name}` }
                    />
                  </div>
                  <span>{ name }</span>
                  <span>{ email }</span>
                  <span>{ description }</span>
                  <Link to="/profile/edit">
                    <div>Editar perfil</div>
                  </Link>
                </section>
              </div>
            </section>
          )}
      </div>
    );
  }
}
