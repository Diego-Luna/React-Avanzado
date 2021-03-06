/* eslint-disable no-undef */
import React, { useState, createContext } from 'react';

export const Context = createContext();

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

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Consumer: Context.Consumer, Provider };
