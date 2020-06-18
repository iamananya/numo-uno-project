import React, { Component } from "react";
import Menu from "./MenuComponent";

import Home from "./HomeComponent";

import BlogFinal from "./SirfBlog";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticleFinal from "./ArticleCall";
import VerifyComponent from "./VerifyComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/blog" component={BlogFinal} />

          <Route path="/blog/:id" component={ArticleFinal} />
          <Route path="/user/verify/:id" component={VerifyComponent} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
