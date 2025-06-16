"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null);

export const AppDataProvider = ({ children }) => {
  const [data, setData] = useState({
    website: null,
    product: null,
    sustainability: null,
    message: null,
    company: null,
    loadingWebsite: true,
    loadingAll: true,
    error: null,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const websiteRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/website`
        ).then((r) => r.json());

        setData((prev) => ({
          ...prev,
          website: websiteRes,
          loadingWebsite: false,
        }));

        const productPromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product`
        ).then((r) => r.json());

        const sustainabilityPromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sustainability`
        ).then((r) => r.json());

        const messagePromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contactHeader`
        ).then((r) => r.json());

        const companyPromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company`
        ).then((r) => r.json());

        const [productRes, sustainabilityRes, messageRes, companyRes] =
          await Promise.all([
            productPromise,
            sustainabilityPromise,
            messagePromise,
            companyPromise,
          ]);

        setData((prev) => ({
          ...prev,
          product: productRes,
          sustainability: sustainabilityRes,
          message: messageRes,
          company: companyRes,
          loadingAll: false,
          error: null,
        }));
      } catch (err) {
        console.error("AppData fetch failed:", err);
        setData((prev) => ({
          ...prev,
          loadingWebsite: false,
          loadingAll: false,
          error: err,
        }));
      }
    };

    fetchAll();
  }, []);

  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
