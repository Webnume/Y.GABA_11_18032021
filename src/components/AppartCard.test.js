import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppartCard from "./AppartCard";

test("should render Title", () => {
  render(<AppartCard>Titre de l'appartement</AppartCard>);
  const title = screen.getByText("Titre de l'appartement");
  expect(title).toBeInTheDocument();
});

