import React from 'react';
import { getUser } from '../services/userAPI';

export default class Header extends React.Component {
  constructor() {
    super();
    this.getUserSession = this.getUserSession.bind(this);
    this.state = {
      name: 'User',
    };
  }

  componentDidMount() {
    this.getUserSession();
    console.log(this.state);
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
      <header data-testid="header-component">
        <div> Home</div>
        <span testid="header-user-name">
          { name === 'User' ? <p>Carregando...</p> : name }
        </span>
      </header>
    );
  }
}
