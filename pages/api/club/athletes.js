// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import strava from "../../../config/strava";

export default async function getClubMembers(req, res) {
  try {
    const data = await strava.athletes.stats({ id: "67712123" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
