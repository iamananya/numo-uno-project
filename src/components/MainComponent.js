import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

import Home from './HomeComponent';

import BlogFinal from './SirfBlog';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }


  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        
        <Switch>
              <Route path='/home'component={Home} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/blog' component={BlogFinal} />
              <Redirect to="/home" />
          </Switch>
        
      </div>
    );
  }
}

export default Main;