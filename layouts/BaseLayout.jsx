import Head from "next/head";
import Footer from "../components/Footer";

const BaseLayout = ({ children, className }) => (
  <div className={`min-w-screen min-h-screen flex flex-col`}>
    <Head>
      <title>Club Clasifier</title>
    </Head>
    <main className={`m-5 ${className || ''}`}>{children}</main>
    <Footer />
  </div>
);

export default BaseLayout;
