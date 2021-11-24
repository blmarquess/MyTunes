import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getProfileInfos();
  }

  getProfileInfos = () => {
    const { name, email, image, description } = getUser();
    this.setState(() => ({ name, email, image, description }));
    this.setState(() => ({ loading: false }));
  }

  render() {
    const { name, email, image, description, loading } = this.state;
    return (
      <div>
        {loading ? (
          <div className="flex p-4 space-x-2 pulse text-xl items-center">
            <div
              className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
            />
            <p>Carregando...</p>
          </div>)

          : (
            <>
              <Header />
              <div data-testid="page-profile">
                <section>
                  <div data-testid="profile-image">{image}</div>
                  <span data-testid="header-user-name">{name}</span>
                  <span>{email}</span>
                  <span>{description}</span>
                  <Link to="/profile/edit">
                    <div>Editar perfil</div>
                  </Link>
                </section>
              </div>
            </>
          )}
      </div>
    );
  }
}
