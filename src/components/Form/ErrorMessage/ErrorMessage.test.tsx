import React from "react";
import { render } from "@testing-library/react";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders the ErrorMessage Component", () => {
    render(<ErrorMessage error="Has error" />);
  });
});
