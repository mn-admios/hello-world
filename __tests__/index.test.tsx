import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByTestId("headingTestID");

    expect(heading).toBeInTheDocument();
  });
  it("renders a link", () => {
    render(<Home />);

    const link = screen.getByRole("link", {
      name: "About",
    });

    expect(link).toBeInTheDocument();
  });
  it("link url match /about", () => {
    render(<Home />);

    const link = screen.getByRole("link", {
      name: "About",
    });

    expect(link).toHaveAttribute("href", "/about");
  });
});
