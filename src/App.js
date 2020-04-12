import React, {Component } from 'react';
import './App.css';
import "firebase/firestore";
import Home from './Component/Home';
import Login from './Component/Login';
import Card1 from './Component/Card1';
import fire from './config/fire';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <Home />
          <Card1 />
        </div>
        
        <BrowserRouter>
          <Route exact path="/" />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
        );
  }
}

export default App;
