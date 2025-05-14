import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import TradeSection from "../components/TradeSection";

const tradeData = [
  {
    title: "Domestic Trade",
    image: "/domestic.png",
    description: "Product prices for domestic sales are listed in US dollars.",
    list: [
      {
        text: "The exchange rate between USD and MNT will be based on the official rate announced by the Bank of Mongolia on the date of payment, and payment must be made via bank transfer only.",
      },
      {
        text: "Buyers can choose between two types of cooperation:",
        subList: [
          "Supplying their own raw cashmere for sorting, washing, and dehairing (initial processing).",
          "Purchasing dehaired cashmere that is already available in the company’s warehouse.",
        ],
      },
      {
        text: "In both cooperation models, payment terms must be mutually agreed upon and formalized in a contract.",
      },
      {
        text: "Except where otherwise stated in the purchase agreement, the supplier will not cover domestic transportation costs.",
      },
      {
        text: "The supplier guarantees that all dehaired cashmere delivered will fully comply with the technical requirements outlined in MNS 3683:2015.",
      },
      {
        text: "The buyer may request a quality inspection sample to be tested at the supplier’s in-house laboratory. If desired, the buyer may also request third-party certified analysis to verify product quality.",
      },
    ],
  },
];

const Product = () => {
  return (
    <div className="overflow-hidden">
      <Header />

      <div
        className="relative w-full h-64 sm:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/product.png')" }}
      >
        <div className="relative z-10 flex items-center justify-center h-full"></div>
      </div>

      <div className="bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-32">
        <h1 className="text-2xl sm:text-3xl mb-6 text-black font-bold">
          Gobi Aigar Collaboration Application Form 2024
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 pb-12">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6E1221",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              px: 2,
              "&:hover": {
                backgroundColor: "#4a0d17",
              },
            }}
          >
            <img src="/home-hashtag.svg" alt="icon" className="w-5 h-5" />
            Domestic
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#6E1221",
              border: "2px solid #6E1221",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              px: 2,
              "&:hover": {
                border: "2px solid #4a0d17",
                backgroundColor: "rgba(78,18,33,0.05)",
              },
            }}
          >
            <img src="/global.svg" alt="icon" className="w-5 h-5" />
            International
          </Button>
        </div>

        {tradeData.map((item, idx) => (
          <div key={idx} className="mb-12">
            <TradeSection
              title={item.title}
              image={item.image}
              description={item.description}
              list={item.list}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
