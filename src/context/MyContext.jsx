import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </MyContext.Provider>
  );
};
