import { User } from '../../user/types/user';
import { BaseEntity } from '../../utility/types/entity';
import { SubmissionVote } from './submission-vote';

export type Submission = BaseEntity & {
  imageUrl: string;
  status: SubmissionStatus;
  userId: string;
  recipeId: string;
  user?: Partial<User>;
  recipe?: Partial<any>;
  votes?: Partial<SubmissionVote>[];
};

export enum SubmissionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
