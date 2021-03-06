/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginMutation } from '../hooks/useLoginMutation';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <Registro activateAuth={activateAuth} />
          <Login activateAuth={activateAuth} />
        </>
      );
    }}
  </Context.Consumer>
);

const Registro = ({ activateAuth }) => {
  const { registerMutation, loading, error } = useRegisterMutation();
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };

    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };
  const errorMsg = error ? 'El usuario ya existe o hay algún problema.' : '';

  return (
    <UserForm
      disabled={loading}
      error={errorMsg}
      onSubmit={onSubmit}
      title="Registrarse"
    />
  );
};

const Login = ({ activateAuth }) => {
  const { loginMutation, loading, error } = useLoginMutation();
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };

    loginMutation({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };
  const errorMsg = error ? 'El usuario no existe o hay algun problema.' : '';

  return (
    <UserForm
      disabled={loading}
      error={errorMsg}
      onSubmit={onSubmit}
      title="Iniciar sesión"
    />
  );
};
