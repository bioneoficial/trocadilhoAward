import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  it("renders the PunListPage when the root route/homepage is accessed", () => {
    render(<App />);
    const punListPageTitle = screen.getByRole("heading", {
      name: /Lista de trocadilhos/i,
    });
    expect(punListPageTitle).toBeInTheDocument();
  });

  it("navigates to the PunAddPage when the 'Adicionar novo Trocadilho' link is clicked", () => {
    render(<App />);
    const linkElement = screen.getByRole("tab", {
      name: /adicionar novo trocadilho/i,
    });
    userEvent.click(linkElement);
    const punAddPageTitle = screen.getByRole("heading", {
      name: /Adicionar novo Trocadilho/i,
    });
    expect(punAddPageTitle).toBeInTheDocument();
  });

  it("navigates to the RankingPage when the 'melhores trocadilhos' link is clicked", () => {
    render(<App />);
    const linkElement = screen.getByRole("tab", {
      name: /melhores trocadilhos/i,
    });
    userEvent.click(linkElement);
    const rankingPageTitle = screen.getByRole("heading", {
      name: /Melhores trocadilhos/i,
    });
    expect(rankingPageTitle).toBeInTheDocument();
  });

  it("navigates  back to the PunListPage when the 'Lista de trocadilhos' link is clicked", () => {
    render(<App />);
    const rankingTab = screen.getByRole("tab", {
      name: /melhores trocadilhos/i,
    });
    userEvent.click(rankingTab);
    const punListTab = screen.getByRole("tab", {
      name: /Lista de trocadilhos/i,
    });
    userEvent.click(punListTab);
    const punListPageTitle = screen.getByRole("heading", {
      name: /Lista de trocadilhos/i,
    });
    expect(punListPageTitle).toBeInTheDocument();
  });
});
