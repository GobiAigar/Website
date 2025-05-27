"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null);

export const AppDataProvider = ({ children }) => {
  const [data, setData] = useState({
    website: null,
    product: null,
    sustainability: null,
    loadingWebsite: true,
    loadingAll: true,
    error: null,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const websiteRes = await fetch("http://localhost:8000/api/website", {
          cache: "force-cache",
        }).then((r) => r.json());

        setData((prev) => ({
          ...prev,
          website: websiteRes,
          loadingWebsite: false,
        }));

        const productPromise = fetch("http://localhost:8000/api/product", {
          cache: "force-cache",
        }).then((r) => r.json());

        const sustainabilityPromise = fetch(
          "http://localhost:8000/api/sustainability",
          { cache: "force-cache" }
        ).then((r) => r.json());

        const [productRes, sustainabilityRes] = await Promise.all([
          productPromise,
          sustainabilityPromise,
        ]);

        setData((prev) => ({
          ...prev,
          product: productRes,
          sustainability: sustainabilityRes,
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
