import React from "react";
import { render } from "@testing-library/react";

import PhoneList from "./PhoneList";
import { PhoneListProps } from "./PhoneList.types";

describe("Test Component", () => {
  let props: PhoneListProps;
  beforeEach(() => {
    props = {
      setNewTelefones: () => [{ numero: "", whatsapp: false }],
      telefones: [{ numero: "", whatsapp: false }],
      className: "",
      errors: null,
    };
  });
  const renderComponent = () => render(<PhoneList {...props} />);
  it("should render foo text correctly", () => {});
});
