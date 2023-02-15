import { render, screen } from "@testing-library/react";
import PunList from "./PunList";

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

    expect(punsTable).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toEqual(punsAvailable.length + tableHeaderRow);
  });
});
