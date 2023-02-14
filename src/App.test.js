import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/VAMOS COMECAR AMIGOS AVALIADORES?/i);
  expect(linkElement).toBeInTheDocument();
});
