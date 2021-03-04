import React, { Component } from "react";
import ViewItem from "../Components/ViewItem";
import axios from "axios";

export default class ViewInv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const dbURL = "http://localhost:4500";
    try {
      axios.get(`${dbURL}/`).then((response) => {
        this.setState(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="view-inv">
        {Object.keys(this.state).map((key, idx) => (
          <ViewItem name={this.state[key].name} stock={this.state[key].stock} />
        ))}
      </div>
    );
  }
}
