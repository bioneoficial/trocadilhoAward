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
    const dateInput = screen.getByLabelText("Data");
    const devInput = screen.getByLabelText("Dev");
    const contextInput = screen.getByLabelText("Contexto");
    const punInput = screen.getByLabelText("Trocadilho");
    const submitButton = screen.getByRole("button");

    fireEvent.change(dateInput, { target: { value: "01/01/2021" } });
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

    expect(screen.getAllByText(/Este campo é obrigatório/i)).toHaveLength(4);
  });

  it("Render with correct class", () => {
    render(<PunAdd />);
    const formElement = screen.getByRole("form");
    expect(formElement).toHaveClass("pun-add__form");
  });

  it("does not update the date field with an invalid input", () => {
    render(<PunAdd />);
    const dateInput = screen.getByLabelText("Data");
  
    fireEvent.change(dateInput, { target: { value: "01/32/2021" } });
    expect(dateInput.value).toBe("");
  
    fireEvent.change(dateInput, { target: { value: "02/29/2021" } });
    expect(dateInput.value).toBe("");
  
    fireEvent.change(dateInput, { target: { value: "not a date" } });
    expect(dateInput.value).toBe("");
  });
  
  it("updates the date field with a valid input", () => {
    render(<PunAdd />);
    const dateInput = screen.getByLabelText("Data");
  
    fireEvent.change(dateInput, { target: { value: "01/01/2021" } });
    expect(dateInput.value).toBe("01/01/2021");
  });

it("clears all input fields", () => {
  render(<PunAdd />);
  const dateInput = screen.getByLabelText("Data");
  const devInput = screen.getByLabelText("Dev");
  const contextInput = screen.getByLabelText("Contexto");
  const punInput = screen.getByLabelText("Trocadilho");
  const submitButton = screen.getByRole("button");

  userEvent.type(dateInput, "01/01/2021");
  userEvent.type(devInput, "John Doe");
  userEvent.type(contextInput, "Test context");
  userEvent.type(punInput, "Test pun");
  userEvent.click(submitButton);

  expect(dateInput).toHaveValue("");
  expect(devInput).toHaveValue("");
  expect(contextInput).toHaveValue("");
  expect(punInput).toHaveValue("");
});

});
