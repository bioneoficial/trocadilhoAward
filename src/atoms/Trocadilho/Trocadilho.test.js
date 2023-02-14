import { render, screen } from "@testing-library/react";
import Trocadilho from "./Trocadilho";

describe("When the list is empty", () => {
    it("A message should be displayed saying that the list is empty", () => {
        const trocadilhosEmpty = []
      render(<Trocadilho trocadilhos={trocadilhosEmpty} />);
  
      const emptyMessages = screen.queryAllByText("Lista Vazia");
  
      expect(emptyMessages).toHaveLength(6);
    });
  });
  
