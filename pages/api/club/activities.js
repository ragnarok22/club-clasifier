// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import strava from "strava-v3";

strava.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN,
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STAVA_CLIENT_SECRET,
  redirect_uri: process.env.STRAVA_REDIRECT_URI,
});

export default async function getClubActivities(req, res) {
  const { query } = req;
  try {
    const data = await strava.clubs.listActivities({ id: "cubantrailteam", page: query.page || 1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.statusCode,
      message: error.error.message
    });
  }
}
