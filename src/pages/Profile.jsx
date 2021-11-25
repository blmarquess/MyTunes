import React from 'react';
import EditBtn from '../components/EditBtn';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidMount() { this.getProfileInfos(); }

  getProfileInfos = async () => {
    const user = await getUser();
    this.setState(() => ({ ...user, loading: false }));
  }

  render() {
    const { name, email, description, image, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
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
                className="grid grid-cols-1 p-8 rounded-lg w-96 space-x-2
                justify-center items-center bg-white shadow-md"
              >
                <div className="flex justify-around items-center">
                  <img
                    data-testid="profile-image"
                    className="h-24 w-24 rounded-full border-2 border-white"
                    src={ image }
                    alt="PhotoUser"
                  />
                </div>

                <section className="flex justify-start space-x-2 my-4">
                  <span>Usuario:</span>
                  <span>{ name }</span>
                </section>

                <section className="flex justify-start space-x-2 my-4">
                  <span>E-Mail:</span>
                  <span>{ email }</span>
                </section>

                <section className="flex flex-wrap justify-start space-x-2 my-4">
                  <span>Descrição:</span>
                  <span>{ description }</span>
                </section>

                <EditBtn />
              </section>
            </section>
          )}
      </div>
    );
  }
}
