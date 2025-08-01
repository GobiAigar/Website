"use client";
import React, { useEffect, useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import {
  IconNews,
  IconUsers,
  IconUserPlus,
  IconMapPin,
  IconMessage,
} from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Backend_Endpoint } from "@/constants/constants";

const InformationCount = () => {
  const [counts, setCounts] = useState({
    news: 0,
    messages: 0,
    newUsersAll: 0,
    weekActive: 0,
    weekNew: 0,
    monthActive: 0,
    monthNew: 0,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          newsRes,
          msgRes,
          weekViewsRes,
          monthViewsRes,
          weekSummaryRes,
          monthSummaryRes,
          allSummaryRes,
        ] = await Promise.all([
          fetch(`${Backend_Endpoint}/api/news`),
          fetch(`${Backend_Endpoint}/api/messages`),
          fetch(`${Backend_Endpoint}/api/analytics/views?timeframe=week`),
          fetch(`${Backend_Endpoint}/api/analytics/views?timeframe=month`),
          fetch(`${Backend_Endpoint}/api/analytics/summary?timeframe=week`),
          fetch(`${Backend_Endpoint}/api/analytics/summary?timeframe=month`),
          fetch(`${Backend_Endpoint}/api/analytics/summary?timeframe=year`),
        ]);

        const [
          newsData,
          msgData,
          weekViews,
          monthViews,
          weekSummary,
          monthSummary,
          allSummary,
        ] = await Promise.all([
          newsRes.json(),
          msgRes.json(),
          weekViewsRes.json(),
          monthViewsRes.json(),
          weekSummaryRes.json(),
          monthSummaryRes.json(),
          allSummaryRes.json(),
        ]);

        setCounts({
          news: newsData?.data?.response?.length,
          messages: msgData.length,
          totalUsers: allSummary.activeUsers || 0,
          newUsersAll: allSummary.newUsers || 0,
          weekActive: weekSummary.activeUsers || 0,
          weekNew: weekSummary.newUsers || 0,
          monthActive: monthSummary.activeUsers || 0,
          monthNew: monthSummary.newUsers || 0,
        });
      } catch (err) {
        console.error("Алдаа:", err);
      }
    };

    fetchAll();
  }, []);

  const renderCard = (title, items, cityData = null) => (
    <DashboardCard
      title={title}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "350px",
      }}
    >
      {items.map(({ icon: I, label, value, color }, idx) => (
        <Stack key={idx} direction="row" spacing={1} mt={1} alignItems="center">
          <I size={20} color={color || "#1976d2"} />
          <Typography ml={1}>{label}</Typography>
          <Typography variant="h6" fontWeight="700" ml={1}>
            {value}
          </Typography>
        </Stack>
      ))}
      {cityData && (
        <Box mt={1} sx={{ flexGrow: 1, overflowY: "auto" }}>
          {cityData.map((e, i) => (
            <Box key={i} display="flex" alignItems="center" mb={0.5}>
              <IconMapPin size={20} color="#FA896B" />
              <Typography ml={1} variant="caption" color="text.secondary">
                {e.location} - {e.count} удаа
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </DashboardCard>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          {renderCard("Ерөнхий мэдээлэл", [
            {
              icon: IconNews,
              label: "Мэдээ",
              value: counts.news,
              color: "#FFA500",
            },
            {
              icon: IconMessage,
              label: "Зурвас",
              value: counts.messages,
              color: "#66bb6a",
            },
          ])}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          {renderCard("7 хоногийн үзүүлэлт", [
            {
              icon: IconUsers,
              label: "Сайтаар зорчсон",
              value: counts.weekActive,
            },
            {
              icon: IconUserPlus,
              label: "Шинэ хэрэглэгч",
              value: counts.weekNew,
              color: "#66bb6a",
            },
          ])}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          {renderCard(
            "Сарын үзүүлэлт",
            [
              {
                icon: IconUsers,
                label: "Идэвхтэй хэрэглэгч",
                value: counts.monthActive,
              },
              {
                icon: IconUserPlus,
                label: "Шинэ хэрэглэгч",
                value: counts.monthNew,
                color: "#66bb6a",
              },
            ],
            counts.monthCity
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InformationCount;
