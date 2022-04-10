import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("should render Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', 'logo.svg');
  expect(logo).toHaveAttribute('alt', 'Logo');
  const menuHome = screen.getByText("Accueil");
  expect(menuHome).toBeInTheDocument();
  const menuAPropos = screen.getByText("A Propos");
  expect(menuAPropos).toBeInTheDocument();
});
