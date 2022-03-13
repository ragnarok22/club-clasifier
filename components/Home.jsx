import Image from "next/image";
import BaseLayout from "../layouts/BaseLayout";
import stravaImg from "../resources/images/stravax32.png";
import Loader from "./Loader";

const Home = ({ onLogin, loading }) => {
  const club = {
    profile:
      "https://dgalywyr863hv.cloudfront.net/pictures/clubs/542243/12567539/2/large.jpg",
    name: "Cuban Trail Team",
  };

  return (
    <BaseLayout className="items-center">
      <div className="text-center">
        <h1 className="mb-3">Estadísticas del Club deportivo {club.name}</h1>
        <Image src={club.profile} alt={club.name} width="200" height="200" />
      </div>
      <div className="flex justify-center">
        <button
          className="strava flex items-center justify-center rounded-md px-2 py-1 w-1/4"
          onClick={onLogin}
          disabled={loading}
        >
          {loading ? (
            <Loader className="text-gray-300 my-1" />
          ) : (
            <>
              Entrar con Strava{" "}
              <Image src={stravaImg} width="32" height="32" alt="strava" />
            </>
          )}
        </button>
      </div>
    </BaseLayout>
  );
};

export default Home;
