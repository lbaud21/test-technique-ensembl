import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";
import Series from "../Series";

describe("display the correct title depending on the page", () => {
  it("should display 'Popular Titles' title on Home page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(screen.getByText(/Popular Titles/i)).toBeInTheDocument();
  });

  it("should display 'Popular Movies' title on Movies page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Movies />
      </Router>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /Popular Movies/i
    );
  });

  it("should display 'Popular Series' title on Series page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Series />
      </Router>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /Popular Series/i
    );
  });
});
