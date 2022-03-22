import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";

describe("Select", () => {
  test("renders the Select Component", () => {
    render(
      <Select
        label="Select"
        name="select"
        onChange={() => {}}
        options={[{ label: "1", value: "1" }]}
        value={"1"}
      />
    );
  });
});
