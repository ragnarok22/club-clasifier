import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Home from "../components/Home";

export default function Index({ club }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);
    try {
      const {
        status,
        data: { login_url },
      } = await axios.get("/api/oauth/login_url");
      router.push(login_url);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return <Home club={club} onLogin={handleLogin} loading={loading} />;
}
