import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input Component", () => {
    render(
      <Input label="Input" name="input" onChange={() => {}} value="Input" />
    );
  });
});
