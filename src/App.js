import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import ViewInv from "./Screens/ViewInv";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ViewInv />
      </div>
    );
  }
}
