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
          <div className="font-extrabold mx-8 text-2xl text-white">Home TrybTunes</div>
          <div
            className="rounded-3xl bg-blue-50 h-10 flex mx-8 px-1 space-x-2 items-center
          justify-between"
          >
            <div
              className="rounded-full bg-green-400 border-2 border-green-900
              font-semibold"
            >
              <UserIcon />
            </div>
            <span data-testid="header-user-name" className="mx-4 px-2">
              { name === '' ? <p>Carregando...</p>
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
