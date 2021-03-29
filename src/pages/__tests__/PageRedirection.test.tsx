import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Home from "../Home";

import "@testing-library/jest-dom/extend-expect";

describe("redirection to movies and series pages", () => {
  it("should redirect to movies page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Popular Movies/i), leftClick);

    expect(history.location.pathname).toBe("/movies");
  });

  it("should redirect to series page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Popular Series/i), leftClick);

    expect(history.location.pathname).toBe("/series");
  });
});
