import React, { Component } from "react";
import ReactPlayer from "react-player";

import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import Sticky from "react-sticky-el";

class BlogPage extends Component {
  state = {
    posts1: [],
    posts2: [],
  };

  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data is ", res.data);
        this.setState({ posts1: res.data.posts.slice(4, 5) }, () =>
          console.log("state is ", this.state.posts)
        );
        this.setState({ posts2: res.data.posts.slice(5, 9) }, () =>
          console.log("state is ", this.state.posts)
        );
      })
      .catch((err) => {
        console.log("err in fetch in blog ", err);
        console.log("FRONTEND TEAM SHOW ERROR ");
      });
  }

  render() {
    return (
      <div id="row">
        <div className="leftcolumn">
          {this.state.posts1.map((post) => {
            return (
              <div id="card">
                <div className="row_card">
                  <a href={`/blog/${post.id}`}>
                    <div id="column_card">
                      <img
                        className="image_blog"
                        src={post.feature_image}
                        alt="blog not found"
                      />
                    </div>
                    <div id="column">
                      <h2>
                        {" "}
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h2>

                      <p>{post.custom_excerpt}</p>
                      <div className="small_imgs">
                        <img
                          className="bottom_img"
                          src={`${process.env.PUBLIC_URL}/images/Rectangle_53.png`}
                          alt="blog not found"
                        />
                        <img
                          className="bottom_img"
                          src={`${process.env.PUBLIC_URL}/images/Rectangle_54.png`}
                          alt="blog not found"
                        />
                        <img
                          className="bottom_img"
                          src={`${process.env.PUBLIC_URL}/images/Rectangle_55.png`}
                          alt="blog not found"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}

          {/* end of card */}
          {this.state.posts2.map((post) => {
            return (
              <div id="card">
                <div className="row_article">
                  <a href={`/blog/${post.id}`}>
                    <div className="coloumn_card1">
                      <img
                        className="image_article"
                        src={post.feature_image}
                        alt="blog not found"
                      />
                    </div>
                    <div className="column1">
                      <h2>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h2>
                      <p>Some text..</p>
                      <p>{post.custom_excerpt}</p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          {/*<div id="card">
            <div className="row_article">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.png`}
                  alt="blog not found"
                />
              </div>
              <div className="column1">
                <h2>Column 2</h2>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div id="card">
            <div className="row_article">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.png`}
                  alt="blog not found"
                />
              </div>
              <div className="column1">
                <h2>Column 2</h2>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div id="card">
            <div className="row_article">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.png`}
                  alt="blog not found"
                />
              </div>
              <div className="column1">
                <h2>Column 2</h2>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div id="card">
            <div className="row_article">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.png`}
                  alt="blog not found"
                />
              </div>
              <div className="column1">
                <h2>Column 2</h2>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div id="card">
            <div className="row_article" id="last">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.png`}
                  alt="blog not found"
                />
              </div>
              <div className="column1">
                <h2>Column 2</h2>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
        */}
        </div>{" "}
        {/* end of left col */}
        <div className="rightcolumn">
          {/*<div id="card">
            <button href="" className="custom-button3">
              Latest Post
            </button>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_29.png`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_30.png`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_31.png`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_32.png`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_33.png`}
                  alt="blog not found"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_30.png`}
                  alt="blog not found"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow_blog">
              <div>
                <img
                  className="popImg_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_31.png`}
                  alt="blog not found"
                />
              </div>
              <div className="popText_blog">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
      </div>*/}
          <Sticky scrollElement=".rightcolumn">
            <div className="podCard">
              <a href="/podcast">
                <button href="" className="custom-button3">
                  Latest Podcast
                </button>
              </a>
              <div className="podRow">
                <div>
                  <ReactPlayer
                    id="podLive"
                    controls
                    url="https://www.youtube.com/watch?v=dEv99vxKjVI"
                  />
                </div>
                <div className="podText">
                  <div>
                    <h3>Apple</h3>
                    Some text about me in culpa qui officia deserunt mollit
                    anim..
                  </div>
                </div>
              </div>
              <div className="podRow">
                <div>
                  <ReactPlayer
                    id="podLive"
                    controls
                    url="https://www.youtube.com/watch?v=dEv99vxKjVI"
                  />
                </div>
                <div className="podText">
                  <div>
                    <h3>Apple</h3>
                    Some text about me in culpa qui officia deserunt mollit
                    anim..
                  </div>
                </div>
              </div>
              <div className="podRow">
                <div>
                  <ReactPlayer
                    id="podLive"
                    controls
                    url="https://www.youtube.com/watch?v=dEv99vxKjVI"
                  />
                </div>
                <div className="podText">
                  <div>
                    <h3>Apple</h3>
                    Some text about me in culpa qui officia deserunt mollit
                    anim..
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </div>
      </div>
    );
  }
}

export default BlogPage;
