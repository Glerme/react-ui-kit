import React from "react";
import { render } from "@testing-library/react";

import Radio from "./Radio";
import { RadioProps } from "./Radio.types";

describe("Test Component", () => {
  let props: RadioProps;
  beforeEach(() => {});
  const renderComponent = () => render(<Radio {...props} />);
  it("should render foo text correctly", () => {});
});
