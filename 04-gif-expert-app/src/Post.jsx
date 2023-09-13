import React from "react";
import { useParams } from "react-router-dom";
import articlesList from "./components/articleList";

const Articles = () => {
  const { article } = useParams();

  return (
    <>
      <meta charSet="utf-8" />
      <title>Bonzzay - </title>
      <meta name="description" content="fecha" />
      <meta name="keywords" content="post, article" />
      <link rel="canonical" />
      <div className="article-layout_header">
        <div className="article-header__title">
          <b></b>
          <h1></h1>
        </div>
      </div>
      <div className="article-wrapper">
        <p dangerouslySetInnerHTML={{ __html: articlesList[0].description }} />
      </div>
    </>
  );
};

export default Articles;
