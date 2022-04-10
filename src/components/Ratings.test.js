import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Ratings from "./Ratings";

it("should render Ratings", () => {
  render(<Ratings ratingValue={4} />);
  const stars = screen.getAllByAltText('starFilled');
  expect(stars.length).toEqual(4)
});
