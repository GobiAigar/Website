"use client";
import React from "react";
import Header from "@/components/Header";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductImageList from "@/components/ImageList";
import SplitSection from "@/components/SplitSection";
import InfoCard from "@/components/InforCard";
import Video from "@/components/Video";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const itemData = [
  { img: "/Frame24.png", title: "White" },
  { img: "/Frame23.png", title: "Biege" },
  { img: "/Frame25.png", title: "Grey Blue" },
  { img: "/Frame26.png", title: "Dark Grey" },
];

const sectionsData = [
  {
    img: ["/noos1.png", "/noos2.png", "/noos3.png", "/noos4.png"],
    title: "The Uniqueness of Mongolian Cashmere",
    text: "Due to Mongolia’s harsh and extreme climate, our country produces some of the highest-quality cashmere in the world. The goats that have adapted to winters reaching as low as -40°C grow exceptionally warm undercoats, which are the source of this luxurious fiber.",
    text2:
      "In addition to its warmth, Mongolian cashmere is globally renowned for being some of the finest and longest in fiber...",
    text3:
      "The finer the fiber, the warmer and softer the cashmere feels — and the more highly it is valued worldwide.",
  },
  {
    img: ["/wool1.jpg"],
    title: "WHERE DID OUR STORY BEGIN?",
    text: "Mongolian a people with a deep connection to the sky and the earth...",
    text2:
      "Because of this, we have always honored and praised our homeland...",
    text3: "Therefore, we created this icon in tribute to the birthplace...",
    quote:
      "A name to pass on to the destined childrenA name to inherit by future generations  — Sh. Surenjav",
  },
];

const videoData = {
  title: "Сургалтын видео",
  url: "/video.mp4",
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        <Header />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-6 sm:p-8 lg:p-16">
          <div className="flex flex-col items-center justify-center text-center mt-20 space-y-10 lg:space-y-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              The Gobi Aigar
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl text-white">
              Cashmere & Wool Products Manufacturer and Exporter from Mongolia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                  px: "20px",
                  py: "8px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#f0f0f0" },
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
                  px: "20px",
                  py: "8px",
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

      {/* Product Section */}
      <div className="px-4 sm:px-8 lg:px-32 py-16 bg-white">
        <p className="text-black font-bold text-2xl sm:text-3xl mb-6 text-center lg:text-left">
          The Four Colors of Mongolian Goats
        </p>
        <ProductImageList
          itemData={itemData}
          itemStyle={{
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
          }}
        />
      </div>

      {/* Split Section */}
      <SplitSection sections={sectionsData} />

      {/* Mission - Vision - Values */}
      <div className="bg-white px-4 sm:px-8 lg:px-32 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <InfoCard
            imageSrc="/mission.svg"
            title="Mission"
            description="Монгол ноолуурын үнэ цэнийг нэмэгдүүлж..."
          />
          <div className="hidden lg:block w-px bg-[#8C182A]"></div>
          <InfoCard
            imageSrc="/vision.svg"
            title="Vision"
            description="Дэлхийн жишигт нийцсэн чанартай самнасан ноолуурыг..."
          />
          <div className="hidden lg:block w-px bg-[#8C182A]"></div>
          <InfoCard
            imageSrc="/values.svg"
            title="Values"
            description="Үйл ажиллагаа, үйлдвэрлэлийн шат бүрт..."
          />
        </div>
      </div>

      {/* Supply Chain */}
      <div className="bg-white px-4 sm:px-8 lg:px-32 py-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl mb-6 text-center lg:text-left">
          From Herder to You: Our Supply Chain
        </h1>
        <img
          src="/SupplyChain.png"
          alt="supply image"
          className="w-full h-auto rounded"
        />
      </div>

      {/* Statistics & Video */}
      <div className="bg-white px-4 sm:px-8 lg:px-32 py-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl mb-8">
          Statistics
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <ul className="list-disc text-black text-sm flex flex-col gap-6 lg:w-1/2 px-4">
            <li>Монгол Улсын нийт хүн амын 10% нь малчин ард иргэд байна</li>
            <li>Ноолуур нь малчдын орлогын 65%-ийг дангаар бүрдүүлдэг</li>
            <li>Дунджаар 3ш ямаанаас 1ш цамц бүтээх ноолуур гардаг</li>
            <li>Монгол Улсын газар нутгийн 70% нь бэлчээрийн газар</li>
          </ul>
          <div className="lg:w-1/2">
            <Video src={videoData.url} />
          </div>
        </div>
      </div>

      {/* Mongolia Map + FAQ */}
      <div className="bg-white px-4 sm:px-8 lg:px-32 py-16 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl mb-4">
            Proudly Made in the Land of Cashmere
          </h1>
          <img src="/mongolia.PNG" alt="mongolia" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2">
          <FAQSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
