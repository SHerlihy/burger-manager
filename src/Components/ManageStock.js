import React, { Component } from "react";
import axios from "axios";

export default class ManageStock extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", updated: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //has to be called handleSubmit otherwise doesn't recognise state
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    const updateObj = {
      name: event.target.name,
      used: Number(this.state.value),
    };
    console.log(updateObj);
    const dbURL = "http://localhost:4500";
    try {
      axios
        .patch(`${dbURL}/stock/${event.target.name}`, updateObj)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const holder = `${this.props.stock}`;
    return (
      <form
        name={this.props.name}
        onSubmit={this.handleSubmit}
        className="view-item"
      >
        <p>{this.props.name}</p>
        <input
          placeholder={holder}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">
          {this.state.updated ? "Updated" : "Update"}
        </button>
      </form>
    );
  }
}
