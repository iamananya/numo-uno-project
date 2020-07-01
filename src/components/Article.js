import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import renderHTML from "react-render-html";

import "../components/css/articlestyle.css";

class Article extends Component {
  state = {
    title: "",
    content: ``,
    feature_image: "",
  };

  componentDidMount() {
    const postId = window.location.pathname.split("/")[2];
    const URL = BLOG_URL + `/posts/${postId}/?key=${BLOG_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data ", res.data);
        this.setState({
          title: res.data.posts[0].title,
          content: res.data.posts[0].html.replace(/<img src="http:/g,'<img src="https:'),
          feature_image: res.data.posts[0].feature_image.replace(/http:/g,'https:'),
        });


      })
      .catch((err) => {
        console.log("err is ", err);
      });
  }

  render() {
    return (
      <div>
        <div id="brand_art">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_black_croped2.webp`}
          ></img>
        </div>
        <div id="content_art">
          <h1>Title: {this.state.title}</h1>
          <div className="social_art">
            <i className="fab fa-facebook fa-3x"></i>
            <i class="fab fa-linkedin fa-3x"></i>
            <i class="fab fa-instagram fa-3x"></i>
          </div>
          <div id="container-img_art">
            <img src={this.state.feature_image}></img>
          </div>
          <div className="text_art">{renderHTML(this.state.content)}</div>
        </div>
        {/* <div className="podcast">
          <CardDeck>
            <Card className="container-card">
              <Card.Img
                variant="top"
                className="img-card"
                src="../images/Rectangle_15.webp"
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
                src="../images/Rectangle_15.webp"
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
                src="../images/Rectangle_14.webp"
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
        </div> */}
        {/* <div className="Poppost">
          <div className="card">
            <div className="popRow">
              <div>
                <img className="popImg" src={this.state.feature_image}></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
              <div>
                <img className="popImg" src="../images/Rectangle_32.webp"></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
              <div>
                <img className="popImg" src="../images/Rectangle_33.webp"></img>
              </div>
              <div className="popText">
                <p>
                  <h3>CODING</h3>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Article;
