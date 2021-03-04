import React, { Component } from "react";

export default class ViewItem extends Component {
  render() {
    return (
      <div className="view-item">
        <p>{this.props.name}</p>
        <p>{this.props.stock}</p>
      </div>
    );
  }
}
