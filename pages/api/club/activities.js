// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import strava from "../../../config/strava";

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
