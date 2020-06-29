import React, { Component } from "react";

class Land extends Component {
  render() {
    return (
      <div className="ninja-header">
        <a href="/blog">
          <button className="custom-buttona2">Blog</button>
        </a>
        <a href="/podcast">
          <button className="custom-buttona1">Podcast</button>
        </a>
      </div>
    );
  }
}

export default Land;
