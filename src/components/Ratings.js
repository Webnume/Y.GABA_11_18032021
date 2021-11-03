import React, { Component } from "react";
import Star from "../asset/images/star.svg";
import StarFilled from "../asset/images/star_filled.svg";

class Ratings extends Component {
  render() {
    const ratingsArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.props.ratingValue) ratingsArray.push(<img className="ratings" key={i} src={StarFilled} alt="" />);
      else ratingsArray.push(<img className="ratings" key={i} src={Star} alt="" />);
    }

    return ratingsArray;
  }
}

export default Ratings;
