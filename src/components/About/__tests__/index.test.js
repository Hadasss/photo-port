import React from "react";

// The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
// jest-dom offers access to custom matchers that are used to test DOM elements:
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results:
afterEach(cleanup);

// Then we'll use the describe function to declare the component we're testing:
describe("About component", () => {
  //render About test

  // first test
  // we'll use the render function to render the About component using JSX. Alternatively, test can also be used interchangeably with it to create a test.
  it("renders", () => {
    render(<About />);
  });

  // second test
});
