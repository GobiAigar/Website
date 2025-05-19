"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductImageList from "../components/ImageList";
import SplitSection from "../components/SplitSection";
import InfoCard from "../components/InforCard";
import Video from "../components/Video";
import FAQSection from "../components/FAQSection";

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
    text: "Due to Mongolia’s harsh and extreme climate, our country produces some of the highest-quality cashmere in the world. The goats that have adapted to winters reaching as low as -40°C grow exceptionally warm undercoats, which are the source of this luxurious fiber. In addition to its warmth, Mongolian cashmere is globally renowned for being some of the finest and longest in fiber... The finer the fiber, the warmer and softer the cashmere feels — and the more highly it is valued worldwide.",
    text2: "",
    text3: "",
  },
  {
    img: ["/wool1.jpg"],
    title: "WHERE DID OUR STORY BEGIN?",
    text: "Mongolian a people with a deep connection to the sky and the earth. We have an ancient heritage and a rich history, living in harmony with nature by moving with our livestock through the four seasons.",
    text2:
      "Because of this, we have always honored and praised our homeland — the land where we were born and raised — entrusting our fate, hopes, and dreams to the natural world. In doing so, we offer pure white gifts to nature and live in reverence.",
    text3:
      "Therefore, we created this icon in tribute to the birthplace of our company’s founder — Govi-Altai, Mongolia’s second-largest province — and in honor of their ancestral heritage.",
    quote:
      "A name to pass on to the destined childrenA name to inherit by future generations  — Sh. Surenjav",
  },
];

const videoData = {
  title: "Сургалтын видео",
  url: "/video.mp4",
};

const data = [
  {
    imageSrc: "/mission.svg",
    title: "Mission",
    description:
      "Монгол ноолуурын үнэ цэнийг нэмэгдүүлж, харилцагчдынхаа итгэлт түнш нь байж, малчин ард түмэн болоод ажилтнуудынхаа амьдралын чанарыг дээшлүүлнэ.",
  },
  {
    imageSrc: "/vision.svg",
    title: "Vision",
    description:
      "Дэлхийн жишигт нийцсэн чанартай самнасан ноолуурыг зохистой дадлаар үйлдвэрлэгч, нийгэм, эдийн засгийн хөгжлийг түгээгч, инновацийг хөхүүлэн дэмжигч, манлайлагч байгууллага байна.",
  },
  {
    imageSrc: "/values.svg",
    title: "Values",
    description:
      "Үйл ажиллагаа, үйлдвэрлэлийн шат бүрт тасралтгүй сайжруулалтыг хийгч, чанар, технологийн горимыг өндөр түвшинд мөрдүүлэгч, хариуцлагатай, үнэнч шударга, нөхөрсөг хамт олон байна.",
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        ></Box>
        <Header />
        <Container
          sx={{ position: "relative", zIndex: 10, py: 10, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="common.white"
            gutterBottom
          >
            The Gobi Aigar
          </Typography>
          <Typography variant="h5" color="common.white" mb={4}>
            Cashmere & Wool Products Manufacturer and Exporter from Mongolia.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                href="/product"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                See product
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ color: "white", borderColor: "white", borderRadius: 3 }}
              >
                Our History
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          textAlign={{ xs: "center", lg: "left" }}
        >
          The Four Colors of Mongolian Goats
        </Typography>
        <ProductImageList itemData={itemData} />
      </Container>
      <Container sx={{ py: 8 }}>
        <SplitSection sections={sectionsData} />
      </Container>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container alignItems="stretch" spacing={2}>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item size={{ xs: 12, sm: 3.7, md: 3.84 }}>
                <InfoCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              </Grid>

              {(index + 1) % 3 !== 0 && index < data.length - 1 && (
                <Grid
                  item
                  sx={{
                    display: {
                      xs: "none",
                      sm: "flex",
                    },
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "#8B4513",
                      borderRightWidth: 1,
                      height: "100%",
                    }}
                  />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} mb={4}>
          From Herder to You: Our Supply Chain
        </Typography>
        <Box
          component="img"
          src="/SupplyChain.png"
          alt="supply image"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          sx={{
            fontSize: {
              xs: "24px", // mobile
              sm: "28px", // tablet
              md: "32px", // desktop
            },
          }}
        >
          Statistics
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 6 }} zeroMinWidth>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Box
                component="ul"
                sx={{
                  pl: 3,
                  fontSize: "1rem",
                  lineHeight: 2,
                  color: "text.secondary",
                  listStyleType: "disc",
                  m: 0,
                }}
              >
                <li>
                  Монгол Улсын нийт хүн амын 10% нь малчин ард иргэд байна
                </li>
                <li>Ноолуур нь малчдын орлогын 65%-ийг дангаар бүрдүүлдэг</li>
                <li>Дунджаар 3ш ямаанаас 1ш цамц бүтээх ноолуур гардаг</li>
                <li>Монгол Улсын газар нутгийн 70% нь бэлчээрийн газар</li>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} zeroMinWidth>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Video src={videoData.url} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }} zeroMinWidth>
            <Typography variant="h4" fontWeight={700} mb={2}>
              Proudly Made in the Land of Cashmere
            </Typography>
            <Box
              component="img"
              src="/mongolia.PNG"
              alt="mongolia"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} zeroMinWidth>
            <FAQSection />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
