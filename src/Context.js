import React, { useState, createContext } from 'react';

const Contex = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};

export default { Consumer: Contex.Consumer, Provider };
