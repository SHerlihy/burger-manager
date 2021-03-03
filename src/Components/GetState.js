import React, { Component } from "react";
import axios from "axios";

export default class GetState extends Component {
  Inventory() {
    try {
      axios.get(`${dbURL}/`).then((response) => {
        this.state = response.data;
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <div></div>;
  }
}
