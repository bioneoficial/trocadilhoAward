import { fireEvent, render, screen } from "@testing-library/react";
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
    fireEvent.click(likeButton);

    expect(onClick).toHaveBeenCalled();
  });

  it("displays the correct text content", () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole("button", { name: /like/i });

    expect(likeButton).toHaveTextContent("DEIXE SEU LIKE!");
  });
});
