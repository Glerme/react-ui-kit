import React from "react";

import {
  CgChevronLeft as PreviousPage,
  CgPushChevronLeft as FirstPage,
  CgChevronRight as NextPage,
  CgPushChevronRight as LastPage,
} from "react-icons/cg";

import classNames from "classnames";

import { PaginationProps } from "../utils/PaginationProps";

import "./Pagination.module.scss";

export const Pagination: React.FC<PaginationProps> = ({
  page,
  perPage,
  totalCount,
  classNamePagination,
  onChangePage,
  onChangePerPage,
}) => {
  const rangeStart = (page - 1) * perPage + 1;
  const rangeEnd = rangeStart + perPage - 1;
  const lastPage = Math.ceil(totalCount / perPage);

  return (
    <div className={classNames("pagination-container", classNamePagination)}>
      <div className={classNames("pagination-per-page-container")}>
        <span className="caption text">Linhas por página</span>
        <select
          value={perPage}
          onChange={({ target }) => onChangePerPage(+target.value)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      <span className="caption text">
        {rangeStart}-{rangeEnd} de {totalCount}
      </span>
      <div className={classNames("pagination-buttons-container")}>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChangePage(1)}
        >
          <FirstPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChangePage(page - 1)}
        >
          <PreviousPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === lastPage}
          onClick={() => onChangePage(page + 1)}
        >
          <NextPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === lastPage}
          onClick={() => onChangePage(lastPage)}
        >
          <LastPage size={20} />
        </button>
      </div>
    </div>
  );
};
