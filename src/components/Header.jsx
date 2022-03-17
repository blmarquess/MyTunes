import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import UserIcon from './UserIcon';

const menuStyle = `flex border-l-2 border-r-2 border-green-900 bg-green-600 px-8 py-2
w-52 text-white justify-center  flex-grow shrink `;

export default class Header extends React.Component {
  constructor() {
    super();
    this.getUserSession = this.getUserSession.bind(this);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.getUserSession();
  }

  async getUserSession() {
    const data = await getUser();
    const { name } = data;
    if (name !== null) {
      return this.setState(() => ({ name }));
    }
  }

  render() {
    const { name } = this.state;
    return (
      <header>
        <div
          data-testid="header-component"
          className="flex justify-between h-24 bg-green-900 items-center"
        >
          <div className="font-extrabold mx-10 text-3xl text-white">
            Home MyTunes
          </div>
          <div
            className="rounded-full bg-blue-50 h-10 flex mx-8 px-2 space-x-2 items-center
          justify-between border-1 border-white"
          >
            <div
              className="rounded-full bg-green-400 border-4 border-green-400 my-1 mx-0
              font-semibold"
            >
              <UserIcon />
            </div>
            <span data-testid="header-user-name" className="mx-6 px-2 py-4">
              { name === '' ? (
                <div className="flex p-4 space-x-2 pulse">
                  <div
                    className="loading h-5 w-5 rounded-full border-l-2
                border-green-800"
                  />
                  <p>Carregando...</p>
                </div>)
                : name }
            </span>
          </div>
        </div>
        <nav className="flex items-center justify-around">
          <div className={ menuStyle }>
            <Link to="/search" data-testid="link-to-search">
              Search
            </Link>
          </div>
          <div className={ menuStyle }>
            <Link to="/favorites" data-testid="link-to-favorites">
              Favorites
            </Link>
          </div>
          <div className={ menuStyle }>
            <Link to="/profile" data-testid="link-to-profile">
              Profile
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
