import React from "react";
import Header from "@/components/Header";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductImageList from "@/components/ImageList";

const itemData = [
  { img: "/Frame24.png", title: "White" },
  { img: "/Frame23.png", title: "Biege" },
  { img: "/Frame25.png", title: "Grey Blue" },
  { img: "/Frame26.png", title: "Dark Grey" },
];
const itemData2 = [
  { img: "/noos1.png" },
  { img: "/noos2.png" },
  { img: "/noos3.png" },
  { img: "/noos4.png" },
];

const Home = () => {
  return (
    <div>
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-8">
          <Header />
          <div className="flex flex-col items-center justify-center mt-20 text-center space-y-16">
            <h1 className="text-6xl font-bold">The Gobi Aigar</h1>
            <p className="text-2xl max-w-xl">
              Cashmere & Wool Products Manufacturer and Exporter from the
              Heartland of the Industry – Mongolia.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                  paddingX: "20px",
                  paddingY: "8px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                See product
              </Button>

              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  borderRadius: "30px",
                  paddingX: "20px",
                  paddingY: "8px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#ccc",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Our History
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-16 items-center bg-white">
        <p className="text-black font-bold text-3xl mb-5">
          The Four Colors of Mongolian Goats
        </p>

        <ProductImageList itemData={itemData} />
      </div>
      <div className="px-32 py-16 items-center bg-white flex justify-between">
        <ProductImageList
          itemData={itemData2}
          cols={2}
          itemStyle={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
