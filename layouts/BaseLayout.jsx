import Head from "next/head";
import Footer from "../components/Footer";

const BaseLayout = ({ children }) => (
  <div>
    <Head>
      <title>Club Clasifier</title>
    </Head>
    <main className="m-5">{children}</main>
    <Footer />
  </div>
);

export default BaseLayout;
