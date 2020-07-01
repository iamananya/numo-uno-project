import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ReactPlayer from "react-player";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import MetaTags from "react-meta-tags";
class Podcast extends Component {
  state = {
    posts3: [],
  };

  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        this.setState({ posts3: res.data.posts.slice(0, 3) }, () =>
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
      <div className="podCast">
        <div className="podHead">
          <div className="ninja-header">
            <a href="/podcast">
              <button href="" id="custom-buttonb2">
                Podcast
              </button>
            </a>
            <a href="/blog">
              <button href="" id="custom-buttonb1">
                Blog
              </button>
            </a>
          </div>
          <a href="/about">

            <div className="podtitle">

              <img src="../images/Final_Black.png"></img>
            </div>
          </a>
          <div id="podTitle">
            <p>Podcast</p>
          </div>
        </div>
        <MetaTags>
          <title>Numo Uno-Podcast</title>
          <meta
            name="Numo Uno-Podcast"
            content="We present to you Numo Uno-Podcast. For college students, job-seekers, and the insatiably curious. "
          />
        </MetaTags>

        <CardDeck className="first" id="podRow">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              style
              url="https://www.youtube.com/watch?v=yqc9zX04DXs"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  The history of our world in 18 minutes | David Christian
                </h4>
              </Card.Title>
              <Card.Text>
                David Christian narrates a complete history of the universe,
                from the Big Bang to the Internet, in a riveting 18 minutes.
                This is "Big History": an enlightening, wide-angle look at
                complexity, life and humanity.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck id="podRow">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <div className="Poppost">
          <h2>Give It A Read</h2>
          <div id="cardPod">
            {this.state.posts3.map((post) => {
              return (
                <div className="popRow">
                  <a href={`/blog/${post.id}`}>
                    <div>
                      <img
                        className="popImg"
                        src={post.feature_image}
                        alt="blog not found"
                      ></img>
                    </div>
                    <div className="popText">
                      <p>
                        <h3>
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h3>
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Podcast;
