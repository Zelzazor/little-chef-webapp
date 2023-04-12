export type Pagination = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type PaginationParams = Pick<Pagination, 'page' | 'pageSize'>;
