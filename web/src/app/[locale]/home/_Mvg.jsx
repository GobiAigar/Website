"use client";
import { Box, CardMedia, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Mvg = ({ datas }) => {
  const [selected, setSelected] = useState(0);
  const lang = useLocale();

  // Refs
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Анимэйшн хийх функц
  const animateContent = (newIndex) => {
    const elements = [
      imageRef.current,
      titleRef.current,
      descriptionRef.current,
    ];

    const tl = gsap.timeline({
      onComplete: () => {
        // хуучин контентыг нуусны дараа state-г солих
        setSelected(newIndex);

        // шинэ контент дээр fade-in
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      },
    });

    // хуучин контент fade-out
    tl.to(elements, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  // сонголт солих
  const handleSelectionChange = (newIndex) => {
    if (newIndex === selected) return;
    animateContent(newIndex);
  };

  // Автоматаар 5 секунд тутам солих
  useEffect(() => {
    if (!datas || datas.length === 0) return;
    const interval = setInterval(() => {
      const nextIndex = (selected + 1) % datas.length;
      handleSelectionChange(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [datas, selected]);

  // Анхны fade-in
  useEffect(() => {
    if (datas && datas.length > 0) {
      gsap.fromTo(
        [imageRef.current, titleRef.current, descriptionRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  if (!datas || datas.length === 0) return null;

  return (
    <Box>
      <Box
        sx={{
          height: { xs: "400px", sm: "350px", md: "300px" },
          paddingY: 7.5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          backgroundImage: "url('/slogan.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <CardMedia
          ref={imageRef}
          sx={{ width: 50, willChange: "transform, opacity" }}
          component="img"
          src={datas[selected]?.image_url1}
          alt={datas[selected]?.entitle}
        />

        <Typography
          ref={titleRef}
          variant="h4"
          sx={{ willChange: "transform, opacity" }}
        >
          {lang === "mn" ? datas[selected]?.mntitle : datas[selected]?.entitle}
        </Typography>

        <Typography
          ref={descriptionRef}
          variant="body1"
          width={"50%"}
          sx={{ willChange: "transform, opacity" }}
        >
          {lang === "mn"
            ? datas[selected]?.mndescription
            : datas[selected]?.endescription}
        </Typography>

        <Box
          position="absolute"
          bottom="5%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {datas.map((_, dotIndex) => (
              <Box
                key={dotIndex}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: selected === dotIndex ? "#374151" : "#D1D5DB",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: selected === dotIndex ? "#374151" : "#9CA3AF",
                  },
                }}
                onClick={() => handleSelectionChange(dotIndex)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mvg;
