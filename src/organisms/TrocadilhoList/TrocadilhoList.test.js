
import { render, screen } from "@testing-library/react";
import TrocadilhoList from "./TrocadilhoList";

describe("<TrocadilhoList/>", () => {
  const trocadilhosAvailable = [
    {
      date: "13/02/2023",
      votes: 1,
      dev: "julia.albq",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      date: "14/02/2023",
      votes: 2,
      dev: "joao.holanda",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      date: "12/02/2023",
      votes: 3,
      dev: "lucas.oliveira",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      date: "11/02/2023",
      votes: 4,
      dev: "daniel.brasil",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
  ];
  
  it("A list of available trocadilhos should be displayed on the page", () => {
    render(<TrocadilhoList trocadilhos={trocadilhosAvailable} />);

    const trocadilhosTable = screen.getByRole("table");

    expect(trocadilhosTable).toBeInTheDocument();
  });
});
