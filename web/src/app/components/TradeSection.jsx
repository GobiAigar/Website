import { Button } from "@mui/material";
import React from "react";

const TradeSection = ({ title, image, description, list }) => {
  return (
    <div className="flex flex-col sm:flex-row  text-black ">
      <div className="w-full sm:w-1/2 flex justify-start items-start">
        <img
          src={image}
          alt={title}
          className="w-full max-w-md object-cover shadow"
        />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-start text-justify">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
        <p className="mb-4 text-lg text-[#5C4B47]">{description}</p>

        <ul className="list-disc pl-6 space-y-1 text-lg text-[#5C4B47]">
          {list.map((item, index) => (
            <li key={index}>
              {item.text}
              {item.subList && (
                <ul
                  className="pl-6 mt-2 space-y-1"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  {item.subList.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* 📌 Button - responsive width + right aligned on desktop */}
        <div className="flex justify-center sm:justify-end mt-6">
          <Button
            fullWidth
            sx={{
              maxWidth: { xs: "100%", sm: "12rem" }, // xs: full, sm+: 192px
              backgroundColor: "#6E1221",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              "&:hover": {
                backgroundColor: "#4a0d17",
              },
            }}
          >
            <img src="/email.svg" alt="icon" className="w-5 h-5" />
            Contact Us
            <img src="/arrow-right.svg" alt="icon" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TradeSection;
