import React from 'react';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Journal from './components/Journal/JournalCreate';
import Sharing from './components/Sharing/SharingCreate';
import JournalIndex from './components/Journal/JournalIndex';


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

  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({ sessionToken: clearToken });
  // }
  render() {
    return (
      <div>
        <Signup updateToken={this.updateToken} />
        <Login updateToken={this.updateToken} />
        <Journal />
        <Sharing />
        <JournalIndex />
      </div>);
  }
}

export default App;