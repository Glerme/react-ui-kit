import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders the Checkbox Component", () => {
    render(
      <Checkbox
        label="Checkbox"
        name="checkbox"
        onChange={() => {}}
        value={true}
      />
    );
  });
});
