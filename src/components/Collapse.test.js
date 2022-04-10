import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Collapse from "./Collapse";

it("should open Collapse on click when close", () => {
  render(<Collapse title="description"></Collapse>);
  const collapsible = screen.getByTestId("collapsible");
  fireEvent.click(collapsible);
  expect(collapsible).toBeInTheDocument();
});

test("button expands and collapses the content", () => {
  const children = "Content";
  render(<Collapse title="description">{children}</Collapse>);
  const collapsibleButton = screen.getByTestId("collapsible");
  const content = screen.getByTestId("content");
  expect(content).toHaveClass("content");
  fireEvent.click(collapsibleButton);
  expect(content).toHaveClass("active");
  expect(screen.getByText(children)).toBeInTheDocument();
  fireEvent.click(collapsibleButton);
  expect(content).toHaveClass("content");
});
