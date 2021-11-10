import React from 'react';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Journal from './components/Journal/JournalCreate';
import Sharing from './components/Sharing/SharingCreate';
import JournalIndex from './components/Journal/JournalIndex';
import SharingIndex from './components/Sharing/SharingIndex';
import LandingPage from './components/Home/LandingPage';
import Homepage from './components/Home/Homepage';
import { Switch, Route } from "react-router-dom";
import JournalCreate from './components/Journal/JournalCreate';
import Navbar from "./components/Home/Navbar"
import NavbarTwo from './components/Home/NavbarTwo';
import Public from "./components/Sharing/Public";



////////Class Component//////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sessionToken: "" }
  }
  updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.state.sessionToken);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') })
    }
  }

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <>
        <Homepage token={this.state.sessionToken} />
      </>
    )
      : (
        <LandingPage updateToken={this.updateToken} />
      )
  }
  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({ sessionToken: clearToken });
  // }

  render() {
    return (
      <div>
        {localStorage.getItem("token") ? <Navbar /> : null}
        <Switch>
          <Route exact path="/">
        {this.protectedViews()}
          </Route>
          <Route exact path="/JournalCreate">
            <JournalCreate sessionToken={this.state.sessionToken} />
          </Route>
          <Route exact path="/Signup">
            <NavbarTwo updateToken={this.state.updateToken} />
            <Signup updateToken={this.state.updateToken} />
          </Route>
          <Route exact path="/SharingCreate">
            <Sharing sessionToken={this.state.sessionToken} />
          </Route>
          <Route exact path="/SharingIndex">
            <SharingIndex sessionToken={this.state.sessionToken} />
          </Route>
          <Route exact path="/Public">
            <Public sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      </div>
    );
  };
};

export default App;