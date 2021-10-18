/* eslint-disable import/prefer-default-export */
import React from 'react';
import Context from '../Context';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {function ({ activateAuth }) {
      return (
        <form onSubmit={activateAuth}>
          <button>Iniciar sesión</button>
        </form>
      );
    }}
  </Context.Consumer>
);
