import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import BaseLayout from "../layouts/BaseLayout";
import Image from "next/image";

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
      <div className="flex">
        <div className="mr-5">
          <Image
            src={auth.athlete.profile}
            alt={auth.athlete.firstname}
            width="150"
            height="150"
            className="rounded-full"
          />
        </div>
        <div>
          <h1>
            {auth?.athlete.firstname} {auth?.athlete.lastname}
          </h1>
          <h2>{auth.athlete.bio}</h2>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Profile;
