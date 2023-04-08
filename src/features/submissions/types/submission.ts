import { BaseEntity } from '../../utility/types/entity';

export type Submission = BaseEntity & {
  imageUrl: string;
  status: SubmissionStatus;
  userId: string;
  recipeId: string;
};

export enum SubmissionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
