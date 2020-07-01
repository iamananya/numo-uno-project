import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import renderHTML from "react-render-html";

class HeadCards extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data is ", res.data);
        this.setState({ posts: res.data.posts }, () =>
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
      <div className="headCard">
        <CardDeck>
          {this.state.posts.map((post) => {
            return (
              <Card id="shadowa">
                <Card.Img
                  className="headStyle"
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/Rectangle_2_ea.webp`}
                />
                <Card.Body>
                  <Card.Title>
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </Card.Title>
                  <Card.Text>{post.custom_excerpt}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}

export default HeadCards;
