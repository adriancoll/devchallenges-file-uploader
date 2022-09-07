import React, { FC } from "react";
import Head from "./Head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const CreateHead: FC<Props> = ({ title, image, description, url }) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
