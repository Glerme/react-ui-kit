import { useState } from "react";

import { Story, ComponentMeta } from "@storybook/react";

import { Sort } from "../../components/Table/utils/Sort.types";
import Table from "./Table";

export default {
  title: "Table/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: Story = (args) => {
  const [pagination, setPagination] = useState({ page: 1, perPage: 10 });
  const [sort, setSort] = useState<Sort | null>(null);

  return (
    <Table
      title="Users"
      totalCount={3}
      columns={[
        { label: "ID", key: "id", sortable: true },
        { label: "Name", key: "name", sortable: true },
        { label: "Email", key: "email", sortable: true },
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
      getRowId={({ id }) => `${id}`}
      page={pagination.page}
      onChangePage={(page) => setPagination({ ...pagination, page })}
      perPage={pagination.perPage}
      onChangePerPage={(perPage) => setPagination({ ...pagination, perPage })}
      sort={sort}
      onChangeSort={(sortField) => setSort(sortField)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
