import React from 'react';
import { getUser } from '../services/userAPI';

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
      <header
        data-testid="header-component"
        className="flex justify-between h-24 bg-green-900 items-center"
      >
        <div className="font-extrabold mx-8 text-2xl text-white">Home TrybTunes</div>
        <div
          className="rounded-3xl bg-blue-50 h-10 flex mx-8 px-1 space-x-2 items-center
        justify-between"
        >
          <div
            className="rounded-full bg-green-400 border-2 border-green-900 font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={ 2 }
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15
                10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 011-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span data-testid="header-user-name" className="mx-4 px-2">
            { name === '' ? <p>Carregando...</p>
              : name }
          </span>
        </div>
      </header>
    );
  }
}
