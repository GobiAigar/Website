import { BetaAnalyticsDataClient } from "@google-analytics/data";
import dotenv from "dotenv";
dotenv.config();

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "./google-service-account.json",
});

export const getAnalyticsViews = async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: "2024-01-01", endDate: "today" }],
      dimensions: [
        { name: "pagePath" },
        { name: "country" },
        { name: "browser" },
      ],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "averageSessionDuration" },
      ],
      limit: 100,
    });

    res.json(response.rows || []);
  } catch (err) {
    console.error("GA API Error:", err);
    res.status(500).json({ error: "Failed to fetch GA data" });
  }
};
