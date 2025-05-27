import { BetaAnalyticsDataClient } from "@google-analytics/data";
import dotenv from "dotenv";
dotenv.config();

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "./google-service-account.json",
});

export const getAnalyticsViews = async (req, res) => {
  try {
    const { timeframe } = req.query;
    const today = new Date();
    const isoToday = today.toISOString().split("T")[0];
    let startDate;

    switch (timeframe) {
      case "day":
        startDate = isoToday;
        break;
      case "week":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
        startDate = startDate.toISOString().split("T")[0];
        break;
      case "month":
        startDate = new Date(today);
        startDate.setMonth(today.getMonth() - 1);
        startDate = startDate.toISOString().split("T")[0];
        break;
      case "last_3_months":
        startDate = new Date(today);
        startDate.setMonth(today.getMonth() - 3);
        startDate = startDate.toISOString().split("T")[0];
        break;
      case "last_6_months":
        startDate = new Date(today);
        startDate.setMonth(today.getMonth() - 6);
        startDate = startDate.toISOString().split("T")[0];
        break;
      case "year":
        startDate = new Date(today);
        startDate.setFullYear(today.getFullYear() - 1);
        startDate = startDate.toISOString().split("T")[0];
        break;
      default:
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
        startDate = startDate.toISOString().split("T")[0];
        break;
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate: isoToday }],
      dimensions: [
        { name: "date" },
        { name: "pagePath" },
        { name: "country" },
        { name: "city" },
        { name: "browser" },
        { name: "deviceCategory" },
      ],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
        { name: "engagementRate" },
        { name: "eventCount" },
      ],
      limit: 1000,
    });

    res.json(response.rows || []);
  } catch (err) {
    console.error("GA API Error:", err);
    res.status(500).json({ error: "Failed to fetch GA data" });
  }
};
