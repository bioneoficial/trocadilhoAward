import { render, screen, within } from "@testing-library/react";
import RankingTable from "./RankingTable";
import { BESTPUNTABLEHEAD } from "../../utils/enums";

describe("<DevTable />", () => {
  const renderFilledSetup = () => {
    const mostVotedPunList = [
      {
        id: "1",
        votes: 3,
        dev: "dev1",
        context: "context1",
        message: "message1",
        date: "01/01/2023",
      },
      {
        id: "2",
        votes: 2,
        dev: "dev2",
        context: "context2",
        message: "message2",
        date: "01/01/2023",
      },
      {
        id: "3",
        votes: 1,
        dev: "dev3",
        context: "context3",
        message: "message3",
        date: "01/01/2023",
      },
    ];
    return render(
      <RankingTable
        tableHead={BESTPUNTABLEHEAD}
        tableRowContent={mostVotedPunList}
      />
    );
  };
  const renderFilledDrawSetup = () => {
    const mostVotedPunList = [
      {
        id: "1",
        votes: 3,
        dev: "dev1",
        context: "context1",
        message: "message1",
        date: "01/01/2023",
      },
      {
        id: "2",
        votes: 3,
        dev: "dev2",
        context: "context2",
        message: "message2",
        date: "01/01/2023",
      },
      {
        id: "3",
        votes: 3,
        dev: "dev3",
        context: "context3",
        message: "message3",
        date: "01/01/2023",
      },
    ];
    return render(
      <RankingTable
        tableHead={BESTPUNTABLEHEAD}
        tableRowContent={mostVotedPunList}
      />
    );
  };

  const renderEmptySetup = () => {
    return render(<RankingTable tableHead={BESTPUNTABLEHEAD} />);
  };

  it("should render the component", () => {
    renderFilledSetup();

    const devTable = screen.getByRole("table", { name: /ranking Table/i });

    expect(devTable).toBeInTheDocument();
  });

  it("should render the table header", () => {
    renderFilledSetup();

    const tableHeader = screen.getAllByRole("columnheader");
    expect(tableHeader.length).toBe(5);

    expect(tableHeader[0]).toHaveTextContent(/Colocação/i);
    expect(tableHeader[1]).toHaveTextContent(/Votos/i);
    expect(tableHeader[2]).toHaveTextContent(/Dev/i);
    expect(tableHeader[3]).toHaveTextContent(/Contexto/i);
    expect(tableHeader[4]).toHaveTextContent(/trocadilho/i);
  });

  it("should render the table body", () => {
    renderFilledSetup();

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");

    expect(rows.length).toBe(4);
    expect(rows[1]).toHaveTextContent(/1/i);
    expect(rows[1]).toHaveTextContent(/3/i);
    expect(rows[1]).toHaveTextContent(/dev1/i);
    expect(rows[1]).toHaveTextContent(/context1/i);
    expect(rows[1]).toHaveTextContent(/message1/i);
    expect(rows[2]).toHaveTextContent(/2/i);
    expect(rows[2]).toHaveTextContent(/2/i);
    expect(rows[2]).toHaveTextContent(/dev2/i);
    expect(rows[2]).toHaveTextContent(/context2/i);
    expect(rows[2]).toHaveTextContent(/message2/i);
    expect(rows[3]).toHaveTextContent(/3/i);
    expect(rows[3]).toHaveTextContent(/1/i);
    expect(rows[3]).toHaveTextContent(/dev3/i);
    expect(rows[3]).toHaveTextContent(/context3/i);
    expect(rows[3]).toHaveTextContent(/message3/i);
  });

  it("should render the table empty", () => {
    renderEmptySetup();

    const emptyMessage = screen.getByRole("heading", {
      name: /Tabela de Ranking de trocadilhos vazia./i,
    });

    expect(emptyMessage).toBeInTheDocument();
  });
});
