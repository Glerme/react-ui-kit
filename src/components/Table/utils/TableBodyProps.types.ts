import { Sort } from "./Sort.types";
import { Column } from "./Column.types";

export interface TableBodyProps<T> {
  columns: Column<T>[];
  items: T[];
  getRowId: (item: T) => string;
  sort?: Sort | null;
  onChangeSort?: (sort: Sort | null) => void;
  classNameBody?: string;
}
