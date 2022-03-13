import strava from "strava-v3";

strava.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN,
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STAVA_CLIENT_SECRET,
  redirect_uri: process.env.STRAVA_REDIRECT_URI,
});

export default strava;