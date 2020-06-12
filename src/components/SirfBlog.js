import React from "react";
import '../components/css/blog.css';
import Land from "./Land";
import Navigate from "./Navigate";
import HeadCards from "./HeadCards";
import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

import Blog from "./Blog";

function BlogFinal() {
  return (
    <div className="App">
      <Land />
      <div className="responsive">
        <img className="title" src="../images/logo_black_croped2.png"></img>
        <Navigate />
      </div>
      <HeadCards />
      <Blog />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default BlogFinal;
