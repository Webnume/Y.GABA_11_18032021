import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("should render Footer", () => {
  render(<Footer></Footer>);
  const footer = screen.getByText("© 2020 Kasa. All rights reserved")
  expect(footer).toBeInTheDocument();
});

