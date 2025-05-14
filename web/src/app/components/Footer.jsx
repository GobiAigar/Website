"use client";
import React from "react";
import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <div className="relative bg-white px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between text-black gap-10 lg:gap-24">
        <div className="w-full lg:w-1/4">
          <img src="logo.png" alt="logo" className="w-32 sm:w-40" />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <p className="text-base sm:text-lg pb-2">
            130a, manufacturing west area, 20th khoroo Bayangol District,
            Ulaanbaatar, Mongolia
          </p>
          <p className="text-sm">+(976) 7777 6040</p>
          <p className="text-sm">support@agrixglobal.com</p>
        </div>
        <div className="w-full lg:w-1/4 flex justify-between gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <a>About</a>
            <a>Product</a>
            <a>Sustainability</a>
            <a>Partners</a>
            <a>Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Linkedin</a>
            <a>Instagram</a>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <ScrollTopButton />
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-6 text-center">
        © 2025 GOBI AIGAR. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
