import { BaseEntity } from '../../utility/types/entity';

export type SubmissionVote = BaseEntity & {
  isUpvote: boolean;
  userId: string;
  submissionId: string;
};
