import strava from "../../../config/strava";

export default async function authAthlete(req, res) {
  const {
    query: { code, scope },
  } = req;

  try {
    const has_read_scope = scope.includes("activity:read_all");
    const payload = await strava.oauth.getRequestAccessURL({
      scope: has_read_scope ? "activity:read_all" : "activity:read",
    });

    res.status(200).json({
      code,
      scope,
      has_read_scope,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}
