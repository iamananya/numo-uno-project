import React from "react";
import "../components/css/blog.css";
import Land from "./Land";
import Navigate from "./Navigate";
import HeadCards from "./HeadCards";

import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

import BlogPage from "./Blog";

function BlogFinal() {
  return (
    <div className="App">
      <Land />
      <div className="responsive">
        <img
          className="title"
          src={`${process.env.PUBLIC_URL}/images/Final_Black.png`}
          alt="black logo"
        ></img>
        <div id="blog-title">
          <p>BLOG</p>
        </div>
        <Navigate />
      </div>
      <HeadCards />
      {/*<BlogPage />*/}
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default BlogFinal;
