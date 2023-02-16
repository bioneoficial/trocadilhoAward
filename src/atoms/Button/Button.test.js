import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  const renderLikeSetup = (mockOnClick) => {
    const onClick = jest.fn();
    return render(
      <Button
        onClick={mockOnClick ?? onClick}
        classFromProps="button--like"
        buttonText="deixe seu like!"
      />
    );
  };
  const renderSubmitSetup = (mockOnClick) => {
    const onClick = jest.fn();
    return render(
      <Button
        onClick={mockOnClick ?? onClick}
        buttonText="Adicionar"
        classFromProps="button--submit"
      />
    );
  };
  it("renders a like button", () => {
    renderLikeSetup();
    const Button = screen.getByRole("button", { name: /like/i });
    expect(Button).toBeInTheDocument();
  });

  it("renders a button with the correct submit class", () => {
    renderSubmitSetup();
    const submitButton = screen.getByRole("button", { name: /adicionar/i });
    expect(submitButton).toHaveClass("button--submit");
  });

  it("renders a button with the correct like class", () => {
    renderLikeSetup();
    const Button = screen.getByRole("button", { name: /deixe seu like/i });
    expect(Button).toHaveClass("button--like");
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    renderLikeSetup(onClick);
    const Button = screen.getByRole("button", { name: /deixe seu like/i });
    userEvent.hover(Button);
    userEvent.click(Button);
    expect(onClick).toHaveBeenCalled();
  });

  it("displays the correct text content", () => {
    renderLikeSetup();
    const Button = screen.getByRole("button");
    expect(Button).toHaveTextContent(/DEIXE SEU LIKE!/i);
  });

  it("renders a button with the correct text", () => {
    renderSubmitSetup();
    const submitButton = screen.getByRole("button", { name: /adicionar/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    renderSubmitSetup(onClick);
    const submitButton = screen.getByRole("button", { name: /adicionar/i });
    userEvent.hover(submitButton);
    userEvent.click(submitButton);
    expect(onClick).toHaveBeenCalled();
  });
});
