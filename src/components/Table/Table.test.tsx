import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";

describe("Table", () => {
  test("renders the Table Component", () => {
    render(
      <Table
        title="Users"
        totalCount={3}
        columns={[
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Email", key: "email" },
        ]}
        items={[
          {
            id: 1,
            name: "Name 1",
            email: "Email 1",
          },
          {
            id: 2,
            name: "Name 2",
            email: "Email 2",
          },
          {
            id: 3,
            name: "Name 3",
            email: "Email 3",
          },
        ]}
        onChangePage={() => {}}
        onChangePerPage={() => {}}
        page={1}
        perPage={10}
        getRowId={({ id }) => `${id}`}
      />
    );
  });
});
