import React, { createContext } from 'react';

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState('Murat Can');

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
