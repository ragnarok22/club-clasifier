import Head from "next/head";

const BaseLayout = ({ children }) => (
  <div>
    <Head>
      <title>Club Clasifier</title>
    </Head>
    {children}
  </div>
);

export default BaseLayout;
