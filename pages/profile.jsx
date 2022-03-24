import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import BaseLayout from "../layouts/BaseLayout";
import Image from "next/image";
import { getProfile } from "../utils/profile";

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
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full text-center md:w-1/3 md:pr-5">
          <Image
            src={auth.athlete.profile}
            alt={auth.athlete.firstname}
            width="150"
            height="150"
            className="rounded-full"
          />
        </div>
        <div className="w-full text-center md:text-left md:w-2/3">
          <h1>
            {auth?.athlete.firstname} {auth?.athlete.lastname}
          </h1>
          <h2>{auth.athlete.bio}</h2>
        </div>
      </div>
      {
        /*
          ATHLETE
          access_token
          bio
          city
          country
          created_at
          firstname
          id
          lastname
          premium
          profile
          profile_medium
          sex
          state
          username
          weight
          refresh_token
        */
      }
    </BaseLayout>
  );
};

export default Profile;
