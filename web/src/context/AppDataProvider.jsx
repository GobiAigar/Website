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
    faqs: null,
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
        const faqHeaderPromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/faqHeader`
        ).then((r) => r.json());
        const faqPromise = fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/faq`
        ).then((r) => r.json());

        const [
          productRes,
          sustainabilityRes,
          messageRes,
          companyRes,
          faqRes,
          faqHeaderRes,
        ] = await Promise.all([
          productPromise,
          sustainabilityPromise,
          messagePromise,
          companyPromise,
          faqPromise,
          faqHeaderPromise,
        ]);

        setData((prev) => ({
          ...prev,
          product: productRes,
          sustainability: sustainabilityRes,
          message: messageRes,
          company: companyRes,
          faqs: faqRes,
          faqHeader: faqHeaderRes,
          loadingAll: false,
          error: null,
        }));
      } catch (err) {
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
