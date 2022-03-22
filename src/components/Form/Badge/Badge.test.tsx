import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge", () => {
  test("renders the Badge Component", () => {
    render(<Badge>Hello world</Badge>);
  });
});
