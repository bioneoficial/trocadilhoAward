import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
it("renders the homepage", () => {
  render(<App />);
  const linkElement = screen.getByText(/Trocadilho Awards/i);
  expect(linkElement).toBeInTheDocument();
});


it("renders the PunListPage when the root route is accessed", () => {
  render(<App />);
  const punListPageTitle = screen.getByRole("heading", { name: /Lista de trocadilhos/i });
  expect(punListPageTitle).toBeInTheDocument();
});

it("navigates to the PunAddPage when the 'Adicionar novo Trocadilho' link is clicked", () => {
  render(<App />);
  const linkElement = screen.getByText(/Adicionar novo Trocadilho/i);
  userEvent.click(linkElement);
  const punAddPageTitle = screen.getByRole("heading", { name: /Adicionar novo Trocadilho/i });
  expect(punAddPageTitle).toBeInTheDocument();
});

it("navigates to the RankingPage when the 'melhores trocadilhos' link is clicked", () => {
  render(<App />);
  const linkElement = screen.getByText(/melhores trocadilhos/i);
  userEvent.click(linkElement);
  const rankingPageTitle = screen.getByText(/Ranking/i);
  expect(rankingPageTitle).toBeInTheDocument();
});

it("navigates  back to the PunListPage when the 'Lista de trocadilhos' link is clicked", () => {
  render(<App />);
  const rankingTab = screen.getByRole("tab", { name: /melhores trocadilhos/i });
  userEvent.click(rankingTab);
  const punListTab = screen.getByText(/Lista de trocadilhos/i);
  userEvent.click(punListTab);
  const punListPageTitle = screen.getByRole("heading", { name: /Lista de trocadilhos/i });
  expect(punListPageTitle).toBeInTheDocument();
});
});
