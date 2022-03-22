import React from "react";
import { render } from "@testing-library/react";

import InputColor from "./InputColor";

describe("InputColor", () => {
  test("renders the InputColor Component", () => {
    render(
      <InputColor
        label="InputColor"
        name="input"
        onChange={() => {}}
        value="Input"
      />
    );
  });
});
