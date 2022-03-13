// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import strava from "../../../config/strava";

export default async function getClub(req, res) {
  try {
    const data = await strava.clubs.get({ id: "cubantrailteam" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
