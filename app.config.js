import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    tripAdvisorApiKey: process.env.TRIP_ADVISOR_API_KEY,
  },
});