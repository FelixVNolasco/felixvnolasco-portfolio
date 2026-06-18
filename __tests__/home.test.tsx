import { render, screen } from "@testing-library/react";

import Home from "../pages";
import { portfolio } from "../data/portfolio";

describe("home page", () => {
  it("renders the main portfolio sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: portfolio.owner.name })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Featured Projects" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Get in touch" })
    ).toBeInTheDocument();
  });

  it("renders anchors that match the header navigation", () => {
    const { container } = render(<Home />);

    expect(container.querySelector("#skills")).toBeInTheDocument();
    expect(container.querySelector("#projects")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("keeps only the social buttons in the footer", () => {
    const { container } = render(<Home />);
    const footer = container.querySelector("footer");

    expect(footer).not.toBeNull();
    expect(footer?.querySelectorAll("a")).toHaveLength(3);
    expect(footer?.querySelectorAll("svg")).toHaveLength(3);
  });
});
