import React from 'react';
import Header from '../components/Header';

export default () => (
  <div>
    <Header />
    <div data-testid="page-profile-edit">
      Estamos em profile edit com o header incluso!
    </div>
  </div>
);
