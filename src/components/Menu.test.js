import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

test("should render Menu", () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
  const menuHome = screen.getByText("Accueil");
  expect(menuHome).toBeInTheDocument();
  const menuAPropos = screen.getByText("A Propos");
  expect(menuAPropos).toBeInTheDocument();
});