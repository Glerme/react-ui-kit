import React from "react";
import { render } from "@testing-library/react";

import Modal from "./Modal";
import { ModalProps } from "./Modal.types";

describe("Test Component", () => {
  let props: ModalProps;
  beforeEach(() => {});
  const renderComponent = () => render(<Modal {...props} />);
  it("should render foo text correctly", () => {});
});
