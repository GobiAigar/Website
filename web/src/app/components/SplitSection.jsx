import React from "react";

const SplitSection = ({ sections }) => {
  return (
    <div className="px-8 md:px-32 py-16 bg-white space-y-16">
      {sections.map((section, index) => {
        const images = section.img || [];

        let imageLayoutClass = "grid";
        if (images.length === 1) {
          imageLayoutClass = "flex";
        } else {
          imageLayoutClass = "grid grid-cols-2 gap-2";
        }

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-stretch ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-4`}
          >
            <div className={`w-full md:w-1/2 md:px-4 ${imageLayoutClass}`}>
              {images.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={section.alt || `Section image ${i + 1}`}
                  className={`w-full rounded object-cover ${
                    images.length === 1
                      ? "h-auto"
                      : "aspect-[4/3] max-h-[300px]"
                  }`}
                />
              ))}
            </div>

            <div className="w-full md:w-1/2 md:px-4 text-black flex flex-col justify-center">
              {section.title && (
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
                  {section.title}
                </h1>
              )}
              <div className="text-lg font-inter space-y-2">
                {section.text && <p>{section.text}</p>}
                {section.text2 && <p>{section.text2}</p>}
                {section.text3 && <p>{section.text3}</p>}
              </div>
              {section.quote && (
                <div className="mt-4 italic text-gray-600">
                  <p>{section.quote}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SplitSection;
