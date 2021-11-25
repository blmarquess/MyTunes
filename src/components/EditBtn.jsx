import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Link to="/profile/edit">
    <div
      className="py-2 px-8 rounded-md bg-green-600 text-white font-bold
       ml-2 mr-0 text-center"
    >
      Editar perfil
    </div>
  </Link>
);
