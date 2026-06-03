import { render, screen } from "@testing-library/react";
import ErrorPage from "../pages/404";

describe("404 page", () => {
  it("allows visitors to return home", () => {
    render(<ErrorPage />);

    expect(screen.getByRole("link", { name: "Back to Home" })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
