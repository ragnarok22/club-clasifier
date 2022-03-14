import strava from "strava-v3";
import { access_token, client_id, client_secret, redirect_uri } from ".";

strava.config({
  access_token,
  client_id,
  client_secret,
  redirect_uri,
});

export default strava;
