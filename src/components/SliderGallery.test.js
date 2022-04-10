import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SliderGallery from "./SliderGallery";

const pictures = [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
];

describe("<SliderGallery />", () => {
  it("should render SliderGallery", () => {
    render(<SliderGallery logementPictures={pictures} />);
    const currentSlidePicture = screen.getByTestId("currentSlidePicture");

    expect(currentSlidePicture).toHaveAttribute(
      "src",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
    );
  });

  it("should render next Slide", () => {
    render(<SliderGallery logementPictures={pictures} />);
    const nextSlideArrow = screen.getByTestId("nextSlideArrow");

    fireEvent.click(nextSlideArrow);

    const currentSlidePicture = screen.getByTestId("currentSlidePicture");
    expect(currentSlidePicture).toHaveAttribute(
      "src",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
    );
  });

  it("should render previous Slide", () => {
    render(<SliderGallery logementPictures={pictures} />);
    const prevSlideArrow = screen.getByTestId("prevSlideArrow");

    fireEvent.click(prevSlideArrow);
    const currentSlidePicture = screen.getByTestId("currentSlidePicture");

    expect(currentSlidePicture).toHaveAttribute(
      "src",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
    );
  });
});
