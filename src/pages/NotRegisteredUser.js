/* eslint-disable import/prefer-default-export */
import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {function ({ activateAuth }) {
      return (
        <>
          <UserForm title="Registrase" onSubmit={activateAuth} />
          <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
        </>
      );
    }}
  </Context.Consumer>
);
