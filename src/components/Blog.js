import React, { Component } from "react";

import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
class BlogPage extends Component {
  state = {
    posts1: [],
    posts2: [],
  };

  componentWillMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data is ", res.data.posts.slice(4, 5));
        this.setState({ posts1: res.data.posts.slice(4, 6) }, () =>
          console.log("state1 is ", this.state.posts1)
        );
        this.setState({ posts2: res.data.posts.slice(6) }, () =>
          console.log("state2 is ", this.state.posts2)
        );
        console.log(this.state.posts1);
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
          <div id="card">
            <div className="row_card">
              <div id="column_card">
                <img
                  className="image_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52.png`}
                  alt="blog not found"
                />
              </div>
              <div id="column">
                <h2>
                  {" "}
                  <a>{this.state.posts1[0].title}</a>
                </h2>

                <p>{this.state.posts1[0].custom_excerpt}</p>
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
            </div>
          </div>

          {/* end of card */}
          {this.state.posts2.map((post) => {
            return (
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
                    <h2>
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h2>
                    <p>Some text..</p>
                    <p>{post.custom_excerpt}</p>
                  </div>
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
          <div id="card">
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
          </div>

          <div className="podCard">
            <button href="" className="custom-button3">
              Latest Podcast
            </button>
            <div className="podRow">
              <div>
                <img
                  className="podImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_13.png`}
                  alt="blog not found"
                />
              </div>
              <div className="podText">
                <div>
                  <h3>Apple</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="podRow">
              <div>
                <img
                  className="podImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_14.png`}
                  alt="blog not found"
                />
              </div>
              <div className="podText">
                <div>
                  <h3>Apple</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="podRow">
              <div>
                <img
                  className="podImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_15.png`}
                  alt="blog not found"
                />
              </div>
              <div className="podText">
                <div>
                  <h3>Apple</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
