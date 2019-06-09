import React from "../react";
import ReactDOM from "../react-dom";
import { getExampleDOM } from "../test-utils";

test("Check rendering of p", async () => {
  const container = getExampleDOM();

  ReactDOM.render(
    <p />,
    container
  );

  expect(container.querySelector("p")).not.toBeNull();
});