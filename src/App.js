import React,{Component} from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
