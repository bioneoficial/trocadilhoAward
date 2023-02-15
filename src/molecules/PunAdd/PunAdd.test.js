import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PunAdd from "./PunAdd";

describe("PunAdd", () => {
  it("renders the form fields", () => {
    render(<PunAdd />);
    expect(screen.getByLabelText("Data")).toBeInTheDocument();
    expect(screen.getByLabelText("Dev")).toBeInTheDocument();
    expect(screen.getByLabelText("Contexto")).toBeInTheDocument();
    expect(screen.getByLabelText("Trocadilho")).toBeInTheDocument();
  });

  it("submits the form when all required fields are filled", () => {
    render(<PunAdd />);
    const devInput = screen.getByLabelText("Dev");
    const contextInput = screen.getByLabelText("Contexto");
    const punInput = screen.getByLabelText("Trocadilho");
    const submitButton = screen.getByRole("button");

    fireEvent.change(devInput, { target: { value: "John Doe" } });
    fireEvent.change(contextInput, { target: { value: "Test context" } });
    fireEvent.change(punInput, { target: { value: "Test pun" } });
    fireEvent.click(submitButton);

    expect(screen.queryByText(/Este campo é obrigatório/i)).toBeNull();
    expect(devInput).toHaveValue("");
    expect(contextInput).toHaveValue("");
    expect(punInput).toHaveValue("");
  });

  it("does not submit the form when required fields are empty", () => {
    render(<PunAdd />);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(screen.getAllByText(/Este campo é obrigatório/i)).toHaveLength(3);
  });

  it("Render with correct class", () => {
    render(<PunAdd />);
    expect(screen.getByRole("form")).toHaveClass("pun-add__form");
  });
});
