import React from "react";
import { render } from "@testing-library/react";

import InputPhone from "./InputPhone";

describe("InputPhone", () => {
  test("renders the InputPhone Component", () => {
    render(
      <InputPhone
        toggleWhatsApp={() => {}}
        isWhatsapp
        onChange={() => {}}
        value="InputPhone"
      />
    );
  });
});
