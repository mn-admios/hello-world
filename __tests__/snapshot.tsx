import { render } from "@testing-library/react";
import Home from "@/pages/index";
import AboutPage from "@/pages/about/index";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it("renders aboutpage unchanged", () => {
  const { container } = render(<AboutPage />);
  expect(container).toMatchSnapshot();
});
