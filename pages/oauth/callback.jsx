import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";
import useAuth from "../../hooks/useAuth";
import { createProfile } from "../../utils/profile";

const StravaCallback = () => {
  const router = useRouter();
  const { auth, login } = useAuth();

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      // get params from url
      const { code, scope } = router.query;
      if (code) {
        axios
          .get("/api/oauth/callback", { params: { code, scope } })
          .then((response) => {
            login(response.data);

            // save data in supabase
            createProfile({
              id: response.data.athlete.id,
              access_token: response.data.access_token,
              bio: response.data.athlete.bio,
              city: response.data.athlete.city,
              country: response.data.athlete.country,
              created_at: response.data.athlete.created_at,
              firstname: response.data.athlete.firstname,
              lastname: response.data.athlete.lastname,
              premium: response.data.athlete.premium,
              profile: response.data.athlete.profile,
              profile_medium: response.data.athlete.profile_medium,
              sex: response.data.athlete.sex,
              state: response.data.athlete.state,
              username: response.data.athlete.username,
              weight: response.data.athlete.weight,
              refresh_token: response.data.refresh_token,
            });

            // const { code, has_read_scope, scope } = response.data;
            router.push("/profile");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })();
  }, [router.isReady]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader className="text-gray-700" />
    </div>
  );
};

export default StravaCallback;
