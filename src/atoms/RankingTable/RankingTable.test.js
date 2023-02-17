import { render, screen } from "@testing-library/react";
import RankingTable from "./RankingTable";

describe.skip("<DevTable />", () => {
  it("should render the component", () => {
    render(<RankingTable />);
    const devTable = screen.getByRole("table", { name: /rankingTable/i });
    expect(devTable).toBeInTheDocument();
  });
});
