import React from "react";
import { render } from "@testing-library/react";

import ModalConfirm from "./ModalConfirm";
import { ModalConfirmProps } from "./ModalConfirm.types";

describe("Test Component", () => {
  let props: ModalConfirmProps;
  beforeEach(() => {});
  const renderComponent = () => render(<ModalConfirm {...props} />);
  it("should render foo text correctly", () => {});
});
