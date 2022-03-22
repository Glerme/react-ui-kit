import React from "react";
import { render } from "@testing-library/react";

import InputWithIcon from "./InputWithIcon";

describe("InputWithIcon", () => {
  test("renders the InputWithIcon Component", () => {
    render(
      <InputWithIcon
        label="InputWithIcon"
        name="InputWithIcon"
        onChange={() => {}}
        value="InputWithIcon"
        icon={() => <></>}
      />
    );
  });
});
