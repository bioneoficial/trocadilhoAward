import { render, screen } from "@testing-library/react";
import PunList from "./index";

describe("<PunList/>", () => {
  const punsAvailable = [
    {
      id: "0",
      date: "13/02/2023",
      votes: 1,
      dev: "julia.albq",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      id: "1",
      date: "14/02/2023",
      votes: 2,
      dev: "joao.holanda",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      id: "2",
      date: "12/02/2023",
      votes: 3,
      dev: "lucas.oliveira",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      id: "3",
      date: "11/02/2023",
      votes: 4,
      dev: "daniel.brasil",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
  ];

  it("A list of available puns should be displayed on the page", () => {
    render(<PunList />);
    const tableHeaderRow = 1;
    const punsTable = screen.getByRole("table");
    expect(punsTable).toHaveClass("pun-list__table");
    expect(punsTable).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toEqual(punsAvailable.length + tableHeaderRow);
  });
});

it("displays the correct number of puns in the table", () => {
  render(<PunList />);
  const punRows = screen.getAllByRole("row");
  const punsFromStorage = JSON.parse(localStorage.getItem("puns"));
  expect(punRows.length - 1).toBe(punsFromStorage.length);
});

it("displays the correct data for each pun in the table", () => {
  render(<PunList />);
  const punsFromStorage = JSON.parse(localStorage.getItem("puns"));
  const punRows = screen.getAllByRole("row");
  punRows.slice(1).forEach((row, index) => {
    const [date, votes, dev, context, message] = row.cells;
    expect(date.textContent).toBe(punsFromStorage[index].date);
    expect(votes.textContent).toBe(punsFromStorage[index].votes.toString());
    expect(dev.textContent).toBe(punsFromStorage[index].dev);
    expect(context.textContent).toBe(punsFromStorage[index].context);
    expect(message.textContent).toBe(punsFromStorage[index].message);
  });
});
