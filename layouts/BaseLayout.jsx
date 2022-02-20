import Head from "next/head";
import Footer from "../components/Footer";

const BaseLayout = ({ children }) => (
  <div>
    <Head>
      <title>Club Clasifier</title>
    </Head>
    {children}
    <Footer />
  </div>
);

export default BaseLayout;
