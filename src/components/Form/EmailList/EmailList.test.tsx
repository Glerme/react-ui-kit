import React from "react";
import { render } from "@testing-library/react";

import EmailList from "./EmailList";
import { EmailListProps } from "./EmailList.types";

describe("Test Component", () => {
  let props: EmailListProps;
  beforeEach(() => {
    props = {
      emails: [{ email: "" }],
      setNewEmails: jest.fn(),
      className: "",
      errors: null,
    };
  });
  const renderComponent = () => render(<EmailList {...props} />);
  it("should render foo text correctly", () => {});
});
