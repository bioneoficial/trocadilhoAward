import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the homepage", () => {
  render(<App />);
  const linkElement = screen.getByText(/Trocadilho Awards/i);
  expect(linkElement).toBeInTheDocument();
});
