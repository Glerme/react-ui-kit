import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";

describe("Button", () => {
  test("renders the Button Component", () => {
    render(<Badge>Hello world</Badge>);
  });
});
