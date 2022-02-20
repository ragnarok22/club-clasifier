import axios from "axios";
import Home from "../components/Home";

export default function Index({ club }) {
  return <Home club={club} />;
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/api/club/");
  const club = response.data
  return {
    props: { club }, // will be passed to the page component as props
  };
}
