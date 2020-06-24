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
            <button href="" className="custom-buttona2">
              Blog
            </button>
            <button href="" className="custom-buttona1">
              Podcast
            </button>
          </div>
          <div id="pod-logo">
            <img src="../images/logo_white_crop.png"></img>
          </div>
        </div>

        <CardDeck className="podRow first">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="podRow">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="podRow">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <div className="Poppost">
          <div className="card">
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
