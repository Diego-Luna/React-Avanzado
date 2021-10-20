import React, { useState, createContext } from 'react';

const Contex = createContext();

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
  };

  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};

export default { Consumer: Contex.Consumer, Provider };
