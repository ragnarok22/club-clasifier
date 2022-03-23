import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import BaseLayout from "../layouts/BaseLayout";

const Profile = () => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth === null) {
      router.push("/");
    }
  }, []);

  return (
    <BaseLayout>
      <h1>
        {auth?.athlete.firstname} {auth?.athlete.lastname}
        hola
      </h1>
      {/* <h2>{auth.athlete.bio}</h2> */}
    </BaseLayout>
  );
};

export default Profile;
