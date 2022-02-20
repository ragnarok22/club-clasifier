import Image from "next/image";
import BaseLayout from "../layouts/BaseLayout";

const Home = ({ club }) => {
  console.log(club);

  return (
    <BaseLayout>
      <div className="text-center">
        <Image
          src={club.profile}
          alt={club.name}
          width="200"
          height="200"
        />
        <h1 className="text-center">{club.name}</h1>
        <div className="flex">
          <p>{club.member_count}</p>
        </div>
        {/* <p className="mt-2 text-justify">{club.description}</p> */}
      </div>
    </BaseLayout>
  );
};

export default Home;
