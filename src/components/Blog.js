import React, { Component } from "react";
import Sticky from "react-stickynode";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
class BlogPage extends Component {
  render() {
    return (
      <div id="row">
        <div className="leftcolumn">
          <div id="card">
            <div className="row_card">
              <div id="column_card">
                <img
                  className="image_blog"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52.webp`}
                  alt="blog not found"
                />
              </div>
              <div id="column">
                <h2>Coloumn 2</h2>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                </p>
                <div className="small_imgs">
                  <img
                    className="bottom_img"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_53.webp`}
                    alt="blog not found"
                  />
                  <img
                    className="bottom_img"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_54.webp`}
                    alt="blog not found"
                  />
                  <img
                    className="bottom_img"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_55.webp`}
                    alt="blog not found"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="card">
            <div className="container_blog">
              <img
                className="image_blog1"
                src={`${process.env.PUBLIC_URL}/images/Rectangle_16.webp`}
                alt="blog not found"
              />
              <div className="textOnImg">
                <h2>Must see places for summer 2019</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet
                ligula, ac elementum risus. Aliquam volutpat ex eget elit
                venenatis, vel luctus arcu pulvinar.
              </div>
            </div>
          </div>
          {/* end of card */}
          <div id="card">
            <div className="row_article">
              <div className="coloumn_card1">
                <img
                  className="image_article"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_52_b.webp`}
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
        </div>{" "}
        {/* end of left col */}
        <div className="rightcolumn">
          <div id="card">
            <button href="" className="custom-button3">
              Latest Post
            </button>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_29.webp`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_30.webp`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_31.webp`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_32.webp`}
                  alt="Rectangle"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_33.webp`}
                  alt="blog not found"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_30.webp`}
                  alt="blog not found"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
            <div className="popRow">
              <div>
                <img
                  className="popImg"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_31.webp`}
                  alt="blog not found"
                />
              </div>
              <div className="popText">
                <div>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </div>
              </div>
            </div>
          </div>
          <Sticky top="#header" bottomBoundary="#last">
            <div className="podCard">
              <button href="" className="custom-button3">
                Latest Podcast
              </button>
              <div className="podRow">
                <div>
                  <img
                    className="podImg"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_13.webp`}
                    alt="blog not found"
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
                  <img
                    className="podImg"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_14.webp`}
                    alt="blog not found"
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
                  <img
                    className="podImg"
                    src={`${process.env.PUBLIC_URL}/images/Rectangle_15.webp`}
                    alt="blog not found"
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
