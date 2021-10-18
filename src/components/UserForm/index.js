/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" {...email} />

      <input type="text" placeholder="Password" {...password} />
      <button>Iniciar sesión</button>
    </form>
  );
};
