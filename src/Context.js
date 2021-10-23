/* eslint-disable no-undef */
import React, { useState, createContext } from 'react';

export const Contex = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  );
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
      __APOLLO_CLIENT__.resetStore();
    },
  };

  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};

export default { Consumer: Contex.Consumer, Provider };
