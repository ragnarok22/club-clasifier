import strava from "../../../config/strava";

export default async function loginUrl(req, res) {
  const login_url = await strava.oauth.getRequestAccessURL({
    scope: "activity:read_all",
  });

  res.status(200).json({
    login_url,
  });
}
