import { render, screen } from "@testing-library/react";
import LikeButton from "./LikeButton";

describe("<LikeButton />", () => {
  it("renders a like button", () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole("button", { name: /like/i });

    expect(likeButton).toBeInTheDocument();
  });
});
