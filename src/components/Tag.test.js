import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tag from "./Tag";

test("should render Tag", () => {
  render(<Tag>Batignolle</Tag>);
  const tag = screen.getByText("Batignolle")
  expect(tag).toBeInTheDocument();
});
