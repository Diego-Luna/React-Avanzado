/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../container/RegisterMutation';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <Registro activateAuth={activateAuth} />
          <UserForm activateAuth={activateAuth} title="Iniciar sesión" />
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
    registerMutation({ variables }).then(() => {
      activateAuth();
    });
  };
  const errorMsg = error ? 'El usuario ya existe o hay algún problema.' : '';

  console.log('-> errorMsg -> ', errorMsg);

  return (
    <UserForm
      disabled={loading}
      error={errorMsg}
      onSubmit={onSubmit}
      title="Registrarse"
    />
  );
};

// export const NotRegisteredUser = () => {
//   const { registerMutation } = useRegisterMutation();

//   return (
//     <Context.Consumer>
//       {({ activateAuth }) => {
//         const onSubmit = ({ email, password }) => {
//           const input = { email, password };
//           const variables = { input };
//           registerMutation({ variables }).then(activateAuth);
//         };
//         return (
//           <>
//             <UserForm onSubmit={onSubmit} title="Registrarse" />
//             <UserForm onSubmit={activateAuth} title="Iniciar Sesion" />
//           </>
//         );
//       }}
//     </Context.Consumer>
//   );
// };
