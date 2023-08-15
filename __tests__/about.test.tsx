import { render, screen } from "@testing-library/react";
import AbutPage from "@/pages/about/index";

describe("About", () => {
  it("renders a heading", () => {
    render(<AbutPage />);

    const heading = screen.getByRole("heading", {
      name: "This is the about page",
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders a link", () => {
    render(<AbutPage />);

    const link = screen.getByRole("link", {
      name: "Back",
    });

    expect(link).toBeInTheDocument();
  });
  it("link url match /", () => {
    render(<AbutPage />);

    const link = screen.getByRole("link", {
      name: "Back",
    });

    expect(link).toHaveAttribute("href", "/");
  });
});
