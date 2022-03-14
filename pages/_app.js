import "../styles/globals.css";
import { AppWrapper } from "../context/authContext";

function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
