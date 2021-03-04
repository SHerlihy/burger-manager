import React, { Component } from "react";
import ABurger from "./ABurger";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="home">
          <ABurger />
          <p>BurgerTime</p>
        </div>
        <div className="nav-btns">
          <button>New Ingredient</button>
          <button>Manage Stock</button>
        </div>
      </div>
    );
  }
}
