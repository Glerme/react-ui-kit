import React from "react";
import { render } from "@testing-library/react";

import ErrorDetails from "./ErrorDetails";
import { ErrorDetailsProps } from "./ErrorDetails.types";

describe("Test Component", () => {
  let props: ErrorDetailsProps;
  beforeEach(() => {});
  const renderComponent = () => render(<ErrorDetails {...props} />);
  it("should render foo text correctly", () => {});
});
