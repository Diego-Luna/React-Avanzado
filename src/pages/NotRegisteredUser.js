/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../container/RegisterMutation';

export const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };
        return (
          <>
            <UserForm onSubmit={onSubmit} title="Registrarse" />
            <UserForm onSubmit={activateAuth} title="Iniciar Sesion" />
          </>
        );
      }}
    </Context.Consumer>
  );

  // return (
  //   <Context.Consumer>
  //     {function ({ activateAuth }) {
  //       return (
  //         <>
  //           <UserForm title="Registrase" onSubmit={activateAuth} />
  //           <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
  //         </>
  //       );
  //     }}
  //   </Context.Consumer>
  // );
};
