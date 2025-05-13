import React from "react";

const InfoCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex justify-center w-1/3 px-10">
      <div className="text-black space-y-4 py-5 items-center flex flex-col text-center">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title || "Info image"}
            className="w-12 h-12 object-cover rounded"
          />
        )}
        {title && <h1 className="font-bold text-xl text-center">{title}</h1>}
        {description && <p className="text-center text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default InfoCard;
