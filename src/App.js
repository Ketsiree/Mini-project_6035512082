import React, {Component } from 'react';
import './App.css';
import "firebase/firestore";
import Home from './Component/Home';
import Login from './Component/Login';
import Card1 from './Component/Card1';
import Card2 from './Component/Card2';
import Menu from './Component/Menu';
import fire from './config/fire';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from './Component/Carousel1';


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }

  render() {

    if (this.state.user == null) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    return (
      <div>
        <div>
          <Menu />
          <Home />
          <Carousel1 />
          {/* <Card1 /> */}
        </div>
        
        <BrowserRouter>
          <Route exact path="/"component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Card1" component={Card1} />
          <Route path="/Card2" component={Card2} />
        </BrowserRouter>
      </div>
        );
  }
}

export default App;
