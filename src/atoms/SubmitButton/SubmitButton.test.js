import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmitButton from "./SubmitButton";

it("renders a button with the correct text", () => {
  render(<SubmitButton />);
  const submitButton = screen.getByRole("button", { name: /adicionar/i });
  expect(submitButton).toBeInTheDocument();
});

it("calls the onClick function when the button is clicked", () => {
  const onClick = jest.fn();
  render(<SubmitButton onClick={onClick} />);
  const submitButton = screen.getByRole("button", { name: /adicionar/i });
  userEvent.hover(submitButton);
  userEvent.click(submitButton);
  expect(onClick).toHaveBeenCalled();
});

it("renders a button with the correct class", () => {
  render(<SubmitButton />);
  const submitButton = screen.getByRole("button", { name: /adicionar/i });
  expect(submitButton).toHaveClass("submitButton");
});
