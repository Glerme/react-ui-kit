import React from "react";
import { render } from "@testing-library/react";

import Multiselect from "./Multiselect";

describe("Multiselect", () => {
  test("renders the Multiselect Component", () => {
    render(
      <Multiselect
        label="Multiselect"
        name="multiselect"
        onChange={() => {}}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
        value={["1"]}
      />
    );
  });
});
