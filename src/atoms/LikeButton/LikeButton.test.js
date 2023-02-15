import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "./LikeButton";

describe("<LikeButton />", () => {
  it("renders a like button", () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole("button", { name: /like/i });

    expect(likeButton).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(<LikeButton onClick={onClick} />);

    const likeButton = screen.getByRole("button", { name: /like/i });
    userEvent.hover(likeButton);
    userEvent.click(likeButton);

    expect(onClick).toHaveBeenCalled();
  });

  it("displays the correct text content", () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole("button", { name: /like/i });

    expect(likeButton).toHaveTextContent(/DEIXE SEU LIKE!/i);
  });
});

it("renders a button with the correct class", () => {
  render(<LikeButton />);
  const likeButton = screen.getByRole("button", { name: /like/i });
  expect(likeButton).toHaveClass("like-button");
});
