import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import axios from "axios"
import { BLOG_URL, BLOG_KEY } from "../constants/constants"
import renderHTML from "react-render-html";

import "../components/css/article.css"

class Article extends Component {
  state = {
    title: '',
    content: ``,
    feature_image: ''
  }

  componentDidMount() {
    const postId = window.location.pathname.split('/')[2];
    const URL = BLOG_URL + `/posts/${postId}/?key=${BLOG_KEY}`
    axios
      .get(URL)
      .then(res => {
        console.log("res.data ", res.data)
        this.setState({
          title: res.data.posts[0].title,
          content: res.data.posts[0].html,
          feature_image: res.data.posts[0].feature_image
        })
      })
      .catch(err => {
        console.log("err is ",err)
      })
  }
  
  render() {
    return (
      <div>
        <div id="brand_art">
          <img style ={{ width: '400px', height: '400px'}}src={this.state.feature_image}></img>
        </div>
        <div id="content_art">
          <h1>
         Title:  {this.state.title}
           </h1>
           <div className="social_art">
            <i className="fab fa-facebook fa-3x"></i>
            <i class="fab fa-linkedin fa-3x"></i>
            <i class="fab fa-instagram fa-3x"></i>
          </div>
          <div className="container-img_art">
            <img className="bigImg_art" src="../images/Rectangle_502.png"></img>
          </div>
          <div className="text_art">
            {renderHTML(this.state.content)}
            </div>
        </div>
        {/* <div className="podcast">
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
<<<<<<< HEAD
        </div>
        <div className="Poppost">
          <div className="card">
            <div className="popRow">
              <div>
                <img className="popImg" src="../images/Rectangle_30.png"></img>
=======
        </div> */}
        {/* <div className="Poppost">
          <div className="card">
            <div className="popRow">
              <div>
                <img className="popImg" src={this.state.feature_image}></img>
>>>>>>> 215fc84ebacfe6178f2a2de0837cfc4dd3650ea2
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
        </div> */}
      </div>
    );
  }
}

export default Article;
