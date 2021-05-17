import React, { Component } from "react";
import axios from "axios";
import ManageStock from "../Components/ManageStock";
import NewIngredient from "../Components/NewIngredient";

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
    return (
      <div className="view-inv">
        {Object.keys(this.state).map((key, idx) => (
          <ManageStock
            key={this.state[key].name}
            name={this.state[key].name}
            stock={this.state[key].stock}
          />
        ))}
        <NewIngredient />
      </div>
    );
  }
}
