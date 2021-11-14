import React from "react";
import JournalCreate from "../Journal/JournalCreate";
import JournalIndex from "../Journal/JournalIndex";
import SharingCreate from "../Sharing/SharingCreate";
import SharingIndex from "../Sharing/SharingIndex";
import Navigation from "./Navbar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <JournalCreate /> */}
        <JournalIndex />
        {/* <SharingCreate /> */}
        {/* <SharingIndex /> */}
      </div>
    );
  }
}
 
export default Homepage;