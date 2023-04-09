import { Pagination } from './pagination';

export type PaginatedResponse<T> = {
  data: T;
  pagination: Pagination;
};

export type BaseTransactionalOperationResponse = {
  success: boolean;
};
