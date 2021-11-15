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
      <header data-testid="header-component">
        <div> Home</div>
        <span>
          {name === '' ? <p>Carregando...</p>
            : <span data-testid="header-user-name">{ name }</span>}
        </span>
      </header>
    );
  }
}
