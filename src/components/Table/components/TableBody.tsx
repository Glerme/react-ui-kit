import React from "react";

import _ from "lodash";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import classNames from "classnames";

import { TableBodyProps } from "../utils/TableBodyProps.types";

import "./TableBody.scss";

export const TableBody = <T,>({
  columns,
  items,
  getRowId,
  sort,
  onChangeSort,
  classNameBody,
}: TableBodyProps<T>) => {
  return (
    <div className={classNames("table-container-wrapper", classNameBody)}>
      <table className={classNames("table-container")}>
        <thead className={classNames("table-head")}>
          <tr>
            {columns.map((column) => {
              let currentOrder: "ASC" | "DESC" | null;
              let currentArrow: (() => JSX.Element) | null;

              if (sort && sort.field === column.key) {
                if (sort.order === "ASC") {
                  currentOrder = "ASC";
                  currentArrow = () => <FiArrowUp size={18} />;
                } else {
                  currentOrder = "DESC";
                  currentArrow = () => <FiArrowDown size={18} />;
                }
              } else {
                currentOrder = null;
                currentArrow = null;
              }

              let onSort: (() => void) | null = null;
              if (column.sortable && onChangeSort) {
                switch (currentOrder) {
                  case "ASC":
                    onSort = () => onChangeSort(null);
                    break;
                  case "DESC":
                    onSort = () =>
                      onChangeSort({ field: column.key, order: "ASC" });
                    break;
                  default:
                    onSort = () =>
                      onChangeSort({ field: column.key, order: "DESC" });
                    break;
                }
              }

              return (
                <th
                  key={`th-${column.key}`}
                  onClick={() => {
                    onSort && onSort();
                  }}
                >
                  <div
                    className={classNames(column.sortable ? "sortable" : "")}
                    title={column.sortable ? "Clique para ordenar" : ""}
                  >
                    {column.label}
                    {currentArrow && currentArrow()}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={classNames("table-body")}>
          {items.length > 0 ? (
            items.map((item, index) => {
              const key = getRowId(item);

              return (
                <tr key={`tr-${key}`}>
                  {columns.map((column) => {
                    if (column.render) {
                      return (
                        <td key={`tr-${key}-td-${column.key}`}>
                          {column.render(item, index)}
                        </td>
                      );
                    }

                    return (
                      <td key={`tr-${key}-td-${column.key}`}>
                        {_.get(item, column.key)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <p className="body1 text" style={{ textAlign: "center" }}>
                  Nenhum registro encontrado.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
