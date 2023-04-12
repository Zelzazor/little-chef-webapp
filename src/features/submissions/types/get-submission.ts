import { DateStringRange } from '../../utility/types/date-range';
import { PaginationParams } from '../../utility/types/pagination';
import { PaginatedResponse } from '../../utility/types/response';
import { Submission, SubmissionStatus } from './submission';

export type GetSubmissionsRequest = {
  id?: string;
  status?: SubmissionStatus;
  userId?: string;
  recipeId?: string;
  dateRange?: Partial<DateStringRange>;
  deleted?: boolean;
};

export type GetSubmissionsParams = Partial<PaginationParams>;

export type SubmissionFilters = GetSubmissionsRequest & GetSubmissionsParams;

export type GetSubmissionsResponse = PaginatedResponse<Submission[]>;
