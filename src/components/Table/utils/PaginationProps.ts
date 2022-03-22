export interface PaginationProps {
  page: number;
  perPage: number;
  totalCount: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
  classNamePagination?: string;
}
