import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ReactPlayer from "react-player";

class Podcast extends Component {
  render() {
    return (
      <div className="podCast">
        <div className="podHead">
          <div className="ninja-header">
            <a href="/podcast">
              <button href="" className="custom-buttona2">
                Podcast
              </button>
            </a>
            <a href="/blog">
              <button href="" className="custom-buttona1">
                Blog
              </button>
            </a>
          </div>
          <div id="pod-logo">
            <img src="../images/Final_Black.png"></img>
          </div>
          <div id="podTitle">
            <p>Podcast</p>
          </div>
        </div>

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
                complexity, life and humanity, set against our slim share of the
                cosmic timeline.
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
          <div id="cardPod">
            <h2>Give It A Read</h2>
            <div className="popRow">
              <div>
                <img className="popImg" src="../images/Rectangle_30.png"></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
              <div>
                <img className="popImg" src="../images/Rectangle_32.png"></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
              <div>
                <img className="popImg" src="../images/Rectangle_33.png"></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Podcast;
