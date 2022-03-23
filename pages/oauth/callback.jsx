import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";
import useAuth from "../../hooks/useAuth";

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
