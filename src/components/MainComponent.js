import React, { Component } from "react";
import Home from "./HomeComponent";
import BlogFinal from "./SirfBlog";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticleFinal from "./ArticleCall";
import VerifyComponent from "./VerifyComponent";
import PodcastCall from './PodcastCall';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div id="root">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={BlogFinal} />
          <Route exact path="/podcast" component={PodcastCall} />
          <Route path="/blog/:id" component={ArticleFinal} />
          <Route path="/user/verify/:id" component={VerifyComponent} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
