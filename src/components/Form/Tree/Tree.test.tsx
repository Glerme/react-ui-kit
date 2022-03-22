import React from "react";
import { render } from "@testing-library/react";

import Tree from "./Tree";

describe("Tree", () => {
  test("renders the Tree Component", () => {
    render(
      <Tree
        setItems={(newItems) => console.log(newItems)}
        items={[
          {
            itemId: "1",
            name: "ITEM 1",
            checked: true,
            open: true,
            parentId: "",
          },
          {
            itemId: "2",
            name: "ITEM 1-1",
            checked: true,
            open: false,
            parentId: "1",
          },
          {
            itemId: "3",
            name: "ITEM 1-2",
            checked: true,
            open: false,
            parentId: "1",
          },
          {
            itemId: "4",
            name: "ITEM 1-3",
            checked: true,
            open: false,
            parentId: "1",
          },
          {
            itemId: "5",
            name: "ITEM 2",
            checked: true,
            open: false,
            parentId: "",
          },
          {
            itemId: "6",
            name: "ITEM 3",
            checked: false,
            open: false,
            parentId: "",
          },
          {
            itemId: "7",
            name: "ITEM 4",
            checked: false,
            open: false,
            parentId: "",
          },
        ]}
      />
    );
  });
});
