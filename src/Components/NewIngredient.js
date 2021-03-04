import React, { Component } from "react";

export default class NewIngredient extends Component {
  render() {
    return (
      <div className="add-wrap">
        <form className="add-form">
          <input placeholder="Ingredient Name" />
          <input placeholder="Current Stock" />

          <button>Add New Ingredient</button>
        </form>
      </div>
    );
  }
}
