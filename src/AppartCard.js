import React, { Component } from "react";

class AppartCard extends Component {
  render() {
    return (
        <article
          className="appartCard"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${this.props.img})`,
            backgroundSize: "cover",
          }}
        >
          <h2>{this.props.children}</h2>
        </article>
    );
  }
}

export default AppartCard;
