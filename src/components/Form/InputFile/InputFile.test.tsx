import React from "react";
import { render } from "@testing-library/react";

import InputFile from "./InputFile";

describe("InputFile", () => {
  test("renders the InputFile Component", () => {
    render(<InputFile label="InputFile" name="input" onChange={() => {}} />);
  });
});
