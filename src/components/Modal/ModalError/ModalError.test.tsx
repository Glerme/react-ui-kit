import React from "react";
import { render } from "@testing-library/react";

import ModalError from "./ModalError";
import { ModalErrorProps } from "./ModalError.types";

describe("ModalError", () => {
  let props: ModalErrorProps;
  beforeEach(() => {
    props = {
      error: {} as any,
      onClose: () => {},
      onShowDetails: () => {},
    };
  });

  const renderComponent = () => render(<ModalError {...props} />);

  it("should render foo text correctly", () => {});
});
