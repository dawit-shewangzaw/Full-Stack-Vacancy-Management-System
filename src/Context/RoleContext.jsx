import React, { createContext, useState, useEffect } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roleId, setRoleId] = useState(localStorage.getItem('roleId'));

  useEffect(() => {
    localStorage.setItem('roleId', roleId);
  }, [roleId]);

  const clearRoleId = () => {
    setRoleId(null);
    localStorage.removeItem('roleId');
  };

  return (
    <RoleContext.Provider value={{ roleId, setRoleId, clearRoleId }}>
      {children}
    </RoleContext.Provider>
  );
};
