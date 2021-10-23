/* eslint-disable import/prefer-default-export */
import React, { Fragment, useContext } from 'react';
import { Contex } from '../Context';
import { SubmitButton } from '../components/SubmitButton';

export const User = () => {
  const { removeAuth } = useContext(Contex);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};
