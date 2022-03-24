import React from "react";
import { render } from "@testing-library/react";

import TabList from "./TabList";

describe("TabList", () => {
  test("renders the TabList Component", () => {
    render(
      <TabList labels={["Test", "Test 2"]}>
        <div>Hello world</div>
        <div>Hello world</div>
      </TabList>
    );
  });
});
