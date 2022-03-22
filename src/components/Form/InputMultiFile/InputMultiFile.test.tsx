import React from "react";
import { render } from "@testing-library/react";

import InputMultiFile from "./InputMultiFile";

describe("InputMultiFile", () => {
  test("renders the InputMultiFile Component", () => {
    render(
      <InputMultiFile
        label="InputMultiFile"
        name="input"
        onChange={() => {}}
        value={undefined}
      />
    );
  });
});
