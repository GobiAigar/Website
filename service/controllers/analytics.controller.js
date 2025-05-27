import { BetaAnalyticsDataClient } from "@google-analytics/data";
import dotenv from "dotenv";
dotenv.config();

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "./google-service-account.json",
});

export const getAnalyticsViews = async (req, res) => {
  try {
    const { timeframe } = req.query;
    const now = new Date();
    const nowMongolia = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const isoToday = nowMongolia.toISOString().split("T")[0];

    let startDate;
    if (timeframe === "day") {
      startDate = isoToday;
    } else {
      const d = new Date(nowMongolia);
      switch (timeframe) {
        case "week":
          d.setDate(d.getDate() - 7);
          break;
        case "month":
          d.setMonth(d.getMonth() - 1);
          break;
        case "last_3_months":
          d.setMonth(d.getMonth() - 3);
          break;
        case "last_6_months":
          d.setMonth(d.getMonth() - 6);
          break;
        case "year":
          d.setFullYear(d.getFullYear() - 1);
          break;
        default:
          d.setDate(d.getDate() - 7);
      }
      startDate = d.toISOString().split("T")[0];
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate: isoToday }],
      dimensions: [
        { name: timeframe === "day" ? "dateHour" : "date" },
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
