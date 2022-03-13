import strava from "../../../config/strava";

export default async function authAthlete(req, res) {
  const {
    query: { code, scope },
  } = req;

  try {
    const payload = await strava.oauth.getToken(code);

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}
