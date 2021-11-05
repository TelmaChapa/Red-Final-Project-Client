import React from 'react';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Journal from './components/Journal/JournalCreate';
import Sharing from './components/Sharing/SharingCreate';
import JournalIndex from './components/Journal/JournalIndex';
import SharingIndex from './components/Sharing/SharingIndex';
import LandingPage from './components/Home/LandingPage';
import Homepage from './components/Home/Homepage';



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

  protectedViews = () => {
    return (localStorage.getItem('token') ? <Homepage token={this.state.sessionToken} />
      : <LandingPage updateToken={this.updateToken} />)
  }
  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({ sessionToken: clearToken });
  // }
  render() {
    return (
      <div>
        {this.protectedViews()}

      </div>
    );
  };
};

export default App;