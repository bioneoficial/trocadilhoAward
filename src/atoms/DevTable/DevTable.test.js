import { render, screen, within } from "@testing-library/react";
import DevTable from "./index";
import { DEVBYPUNS } from "../../utils/enums";

describe("<DevTable />", () => {
  const renderFilledSetup = () => {
    const mostPunByDevResult = [
      {
        dev: "dev1",
        punQty: 3,
      },
      {
        dev: "dev2",
        punQty: 2,
      },
      {
        dev: "dev3",
        punQty: 1,
      },
    ];
    return render(
      <DevTable tableHead={DEVBYPUNS} tableRowContent={mostPunByDevResult} />
    );
  };

  it("renders DevTable", () => {
    renderFilledSetup();

    const devTable = screen.getByRole("table");

    expect(devTable).toBeInTheDocument();
  });

  it("renders DevTable with correct headers", () => {
    renderFilledSetup();

    const devTable = screen.getByRole("table");
    const headers = within(devTable).getAllByRole("columnheader");

    expect(headers[0]).toHaveTextContent(/Colocação/i);
    expect(headers[1]).toHaveTextContent(/Número De Trocadilhos/i);
    expect(headers[2]).toHaveTextContent(/Dev/i);
  });

  it("render empty DevTable", () => {
    render(<DevTable tableHead={DEVBYPUNS} />);

    const emptyDevTable = screen.getByText(/Tabela de Ranking de Devs vazia./i);

    expect(emptyDevTable).toBeInTheDocument();
  });

  it("render DevTable with correct content", () => {
    renderFilledSetup();

    const devTable = screen.getByRole("table");
    const rows = within(devTable).getAllByRole("row");

    expect(rows[1]).toHaveTextContent(/1/i);
    expect(rows[1]).toHaveTextContent(/3/i);
    expect(rows[1]).toHaveTextContent(/dev1/i);

    expect(rows[2]).toHaveTextContent(/2/i);
    expect(rows[2]).toHaveTextContent(/2/i);
    expect(rows[2]).toHaveTextContent(/dev2/i);

    expect(rows[3]).toHaveTextContent(/3/i);
    expect(rows[3]).toHaveTextContent(/1/i);
    expect(rows[3]).toHaveTextContent(/dev3/i);
  });
});
