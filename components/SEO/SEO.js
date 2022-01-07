import React from "react";
import Head from "next/head";

const SEO = ({ title }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <title>{title || "OX Soccer"}</title>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Fonts */}
    </Head>
  );
};

export default SEO;
