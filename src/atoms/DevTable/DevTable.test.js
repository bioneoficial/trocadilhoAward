import { render, screen } from "@testing-library/react";
import DevTable from "./index";

test.skip("renders DevTable", () => {
  render(<DevTable />);
  const devTableElement = screen.getByTestId("dev-table");
  expect(devTableElement).toBeInTheDocument();
});
