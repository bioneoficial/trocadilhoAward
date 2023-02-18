import { render, screen } from "@testing-library/react";
import Pun from "./index";

describe("<Pun />", () => {
  const puns = [
    {
      date: "13/02/2023",
      votes: 1,
      dev: "julia.albq",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsuss",
    },
    {
      date: "14/02/2023",
      votes: 2,
      dev: "joao.holanda",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ligula, id ultricies urna. Duis tincidunt nulla non velit maximus, sit amet dapibus nisi dictum.",
      message: "Lorem ipsus",
    },
  ];

  it("Renders a list of puns", () => {
    render(
      <table>
        <Pun puns={puns} />
      </table>
    );

    const tbody = screen.getByRole("rowgroup");

    expect(tbody).toBeInTheDocument();

    const punRows = screen.queryAllByRole("row", { container: tbody });

    expect(punRows).toHaveLength(puns.length);

    for (let i = 0; i < puns.length; i++) {
      const pun = puns[i];
      const row = punRows[i];

      const dateCell = screen.queryByText(pun.date);
      expect(dateCell).toBeInTheDocument();
      expect(row).toContainElement(dateCell);

      const votesCell = screen.queryByText(pun.votes.toString());
      expect(votesCell).toBeInTheDocument();
      expect(row).toContainElement(votesCell);

      const devCell = screen.queryByText(pun.dev);
      expect(devCell).toBeInTheDocument();
      expect(row).toContainElement(devCell);

      const contextCell = screen.queryByText(pun.context);
      expect(contextCell).toBeInTheDocument();
      expect(row).toContainElement(contextCell);

      const messageCell = screen.queryByText(pun.message);
      expect(messageCell).toBeInTheDocument();
      expect(row).toContainElement(messageCell);

      const likeButton = screen.queryAllByRole("button", {
        name: /like/i,
        container: row,
      });
      expect(likeButton.length).toBeGreaterThan(0);
      expect(likeButton[0]).toBeInTheDocument();
    }
  });

  it("Render Pun with correct class", () => {
    render(
      <table>
        <Pun puns={puns} />
      </table>
    );

    const punRows = screen.queryAllByRole("row");

    expect(punRows).toHaveLength(puns.length);

    for (let i = 0; i < puns.length; i++) {
      const row = punRows[i];

      expect(row).toHaveClass("pun__table-row");
    }
  });
});
