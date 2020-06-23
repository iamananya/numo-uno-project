import React, { Component } from "react";

import "./components/css/demo.css";
import "./components/css/reset.css";
import "./components/css/style.css";
import "./App.css";
import "./components/css/blog.css";
import "./components/css/articlestyle.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

class App extends Component {
  
  state = {
    basename: ''
  }

  componentWillMount() {
    // in case of development and production server
    if (window.location.hostname.includes("localhost") || window.location.hostname.includes("numouno.tech"))
      this.setState({ basename: ''})
    // in case of test server at github pages
      else 
      this.setState({ basename: '/frontend/' })
  }

  render() {
    return (
      <BrowserRouter  basename={this.state.basename} >
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
