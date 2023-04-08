import { Pagination } from './pagination';

export type PaginatedGetResponse<T> = {
  data: T[];
  pagination: Pagination;
};
