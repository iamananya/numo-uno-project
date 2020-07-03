import React, { Component } from "react";
import ReactPlayer from "react-player";
import MetaTags from "react-meta-tags";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import Sticky from "react-stickynode";
class BlogPage extends Component {
  state = {
    posts2: [],
  };

  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        this.setState({ posts2: res.data.posts.slice(4) }, () =>
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
          {this.state.posts2.map((post) => {
            return (
              <div id="card">
                <MetaTags>
                  <title>Numo Uno-Blog</title>
                  <meta
                    name="Numo Uno Blog"
                    content="We present to you Numo Uno blog. For college students, job-seekers, and the insatiably curious. "
                  />
                </MetaTags>
                <a href={`/blog/${post.id}`}>
                  <div className="row_article">
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

                      <p>{post.meta_description}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>{" "}
        {/* end of left col */}
        <div className="rightcolumn">
          <Sticky top="#header" bottomBoundary="#subs">
            <div className="podCard">
              <a href="/podcast">
                <button href="" className="custom-button3">
                  Latest Podcast
                </button>
              </a>
              <div className="podRow">
                <div>
                  <ReactPlayer
                    id="podBlog"
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
                    id="podBlog"
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
                    id="podBlog"
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
