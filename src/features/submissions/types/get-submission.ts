import { DateStringRange } from '../../utility/types/date-range';
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

export type GetSubmissionsResponse = PaginatedResponse<Submission[]>;
