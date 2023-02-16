import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  const renderLikeSetup = (mockOnClick) => {
    const onClick = jest.fn();
    return render(
      <Button
        onClick={mockOnClick ?? onClick}
        classFromProps="like-button"
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
        classFromProps="submit-button"
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
    expect(submitButton).toHaveClass("submit-button");
  });

  it("renders a button with the correct like class", () => {
    renderLikeSetup();
    const Button = screen.getByRole("button", { name: /like/i });
    expect(Button).toHaveClass("like-button");
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    renderLikeSetup(onClick);
    const Button = screen.getAllByRole("button", { name: /like/i });
    userEvent.hover(Button[0]);
    userEvent.click(Button[0]);

    expect(onClick).toHaveBeenCalled();
  });

  it("displays the correct text content", () => {
    renderLikeSetup();

    const Button = screen.getByRole("button", { name: /like/i });

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
