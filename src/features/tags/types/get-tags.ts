import { PaginationParams } from '../../utility/types/pagination';
import { PaginatedResponse } from '../../utility/types/response';
import { Tag } from './tag';

export type GetTagsRequest = {
  name?: string;
};

export type GetTagsParams = Partial<PaginationParams>;

export type TagFilters = GetTagsRequest & GetTagsParams;

export type GetTagsResponse = PaginatedResponse<Tag[]>;
