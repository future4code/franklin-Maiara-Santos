import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Bug 1: Carrinho que não soma", () => {
  render(<App />);
  userEvent.click(
    screen.getByRole("button", {
      name: /comprar/i
    })
  );
});

test("Teste 2", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});
