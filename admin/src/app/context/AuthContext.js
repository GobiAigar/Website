"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null);

export const AppDataProvider = ({ children }) => {
  useEffect(() => {
    
    if(!token)
  }, []);

  const data = { login, logout, register, token, user };
  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
