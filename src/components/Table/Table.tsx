import React from "react";

import { Pagination } from "./components/Pagination";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TableProps } from "./utils/TableProps";

const Table = <T,>({
  title,
  columns,
  items,
  totalCount,
  getRowId,
  page,
  onChangePage,
  perPage,
  onChangePerPage,
  sort,
  onChangeSort,
  headerSideComponent,
  classNameBody,
  classNamePagination,
  classNameHeader,
}: TableProps<T>) => {
  return (
    <section>
      <TableHeader
        title={`${title} (${totalCount})`}
        sideComponent={headerSideComponent}
        classNameHeader={classNameHeader}
      />
      <TableBody
        columns={columns}
        items={items}
        getRowId={getRowId}
        sort={sort}
        onChangeSort={onChangeSort}
        classNameBody={classNameBody}
      />
      <Pagination
        totalCount={totalCount}
        page={page}
        onChangePage={onChangePage}
        perPage={perPage}
        onChangePerPage={onChangePerPage}
        classNamePagination={classNamePagination}
      />
    </section>
  );
};

export default Table;
