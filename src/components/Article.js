import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class Article extends Component {
  render() {
    return (
      <div>
        <div className="brand">
          <img src="../images/logo_black_croped2_bu.png"></img>
        </div>
        <div className="content">
          <h1>
            Topic 1 category 1 Outdoor Experience <br /> of a Trek
          </h1>
          <div className="social">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="container-img">
            <img className="bigImg" src="../images/Rectangle_52.png"></img>
          </div>
          <div className="text">
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br />I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br />I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And <br />I
              sit in wonder, dreaming beside. beauty, in motion. All is flowing,
              rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br /> I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
          </div>
          <div className="container-img">
            <img className="bigImg1" src="../images/Rectangle_16@2x.png"></img>
          </div>
          <div className="text">
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br />I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br />I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And <br />I
              sit in wonder, dreaming beside. beauty, in motion. All is flowing,
              rushing and tide-And I sit in wonder, dreaming beside
            </p>
            <p>
              It’s windy. The cool breeze of the ocean. It gives, a sense of
              beauty, in motion. All is flowing, rushing and tide-And
              <br /> I sit in wonder, dreaming beside. beauty, in motion. All is
              flowing, rushing and tide-And I sit in wonder, dreaming beside
            </p>
          </div>
        </div>
        <div className="podcast">
          <CardDeck>
            <Card className="container-card">
              <Card.Img
                variant="top"
                className="img-card"
                src="../images/Rectangle_15.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <p>
                  <br />
                  By:Ananya
                </p>
              </Card.Body>
            </Card>
            <Card className="container-card">
              <Card.Img
                className="img-card"
                variant="top"
                src="../images/Rectangle_15.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <p>
                  <br />
                  By:Ananya
                </p>
              </Card.Body>
            </Card>
            <Card className="container-card">
              <Card.Img
                className="img-card"
                variant="top"
                src="../images/Rectangle_14.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <p>
                  <br />
                  By:Ananya
                </p>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
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

export default Article;
