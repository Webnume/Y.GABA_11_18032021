import React, { Component } from "react";

class SliderGallery extends Component {
  state = {
    current: 0,
    SliderData: this.props.logementPictures,
    length: this.props.logementPictures.length,
  };
  nextSlide = () => {
    this.setState((oldState) => {
      return {
        current:
          oldState.current === this.state.length - 1 ? 0 : oldState.current + 1,
      };
    });
  };

  prevSlide = () => {
    this.setState((oldState) => {
      return {
        current:
          oldState.current === 0 ? this.state.length - 1 : oldState.current - 1,
      };
    });
  };

  render() {
    return (
      <section className="slider" data-testid="slideWrapper">
        <button
          className="right-arrow"
          onClick={this.nextSlide}
          data-testid="nextSlideArrow"
        >
          <i className="fa fa-angle-down"></i>
        </button>
        <button
          className="left-arrow"
          onClick={this.prevSlide}
          data-testid="prevSlideArrow"
        >
          <i className="fa fa-angle-down"></i>
        </button>
        {this.state.SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === this.state.current ? "slide active" : "slide"
              }
              key={index}
            >
              {index === this.state.current && (
                <img
                  src={slide}
                  alt=""
                  className="image"
                  data-testid="currentSlidePicture"
                />
              )}
            </div>
          );
        })}
      </section>
    );
  }
}

export default SliderGallery;
