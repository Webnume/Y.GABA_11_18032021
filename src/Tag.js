import React, { Component } from "react";

class Tag extends Component {
  render() {
    return (
      <>
        <li>{this.props.children}</li>
      </>
    );
  }
}

export default Tag;
