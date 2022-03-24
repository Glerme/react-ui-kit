export interface Column<T> {
  key: string;
  label: string;
  render?: (item: T, index: number) => JSX.Element;
  sortable?: boolean;
}
