import { Column } from "./Column.types";
import { Sort } from "./Sort.types";

export interface TableProps<T> {
  title: string;
  columns: Column<T>[];
  items: T[];
  totalCount: number;
  getRowId: (item: T) => string;
  page: number;
  onChangePage: (page: number) => void;
  perPage: number;
  onChangePerPage: (perPage: number) => void;
  sort?: Sort | null;
  onChangeSort?: (sort: Sort | null) => void;
  headerSideComponent?: () => JSX.Element;
  classNameHeader?: string;
  classNamePagination?: string;
  classNameBody?: string;
}
