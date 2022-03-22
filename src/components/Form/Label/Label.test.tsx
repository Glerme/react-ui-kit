import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  test("renders the Label Component", () => {
    render(
      <Label htmlFor="paragraph">
        <p id="paragraph">Label for text paragraph</p>
      </Label>
    );
  });
});
