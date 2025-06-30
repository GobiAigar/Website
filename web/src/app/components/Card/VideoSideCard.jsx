"use client";
import { Box } from "@mui/material";

const isYouTubeUrl = (url) =>
  /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(url);

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}`
    : url;
};

const VideoSideCard = ({ data }) => {
  const renderSlides = () =>
    data.map((src, i) => {
      if (isYouTubeUrl || isVideo || isEmbed) {
        const embedUrl = getYouTubeEmbedUrl(src);
        return (
          <Box
            key={`embed-${i}`}
            sx={{
              position: "relative",
              height: { xs: "auto", md: "30rem", lg: "37.5rem" },
              paddingTop: "56.25%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
              src={embedUrl}
              title={`Embedded media ${i}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Box>
        );
      }
    });

  return <Box sx={{ width: "100%" }}>{renderSlides()}</Box>;
};

export default VideoSideCard;
