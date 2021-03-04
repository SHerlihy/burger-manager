import React, { Component } from "react";
import axios from "axios";

export default class NewIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: "", stock: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.title]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const updateObj = {
      name: this.state.name,
      price: Number(this.state.price),
      stock: Number(this.state.stock),
    };
    console.log(updateObj);
    const dbURL = "http://localhost:4500";
    try {
      axios.post(`${dbURL}/stock`, updateObj).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="add-wrap">
        <form onSubmit={this.handleSubmit} className="add-form">
          <input
            title="name"
            placeholder="Ingredient Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            title="price"
            placeholder="Price"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <input
            title="stock"
            placeholder="Current Stock"
            onChange={this.handleChange}
            value={this.state.stock}
          />

          <button type="submit">Add New Ingredient</button>
        </form>
      </div>
    );
  }
}
