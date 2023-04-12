import { Card } from 'antd';
import { FC } from 'react';
import NoImage from '../../../utility/assets/images/no-image.png';
import { Submission } from '../../types/submission';
import { DeleteSubmissionButton } from '../delete-submission-button/DeleteSubmissionButton';
import { LikeOutlined } from '@ant-design/icons';

interface SubmissionCardProps {
  submission: Submission;
  className?: string;
}

export const SubmissionCard: FC<SubmissionCardProps> = ({
  submission,
  className,
}) => {
  const upvotes = submission.votes?.filter((vote) => vote.isUpvote).length;
  const downvotes = submission.votes?.filter((vote) => !vote.isUpvote).length;

  return (
    <Card
      className={`h-fit ${className ?? ''}`}
      title={
        <div>
          <div>{submission?.recipe?.name}</div>
          <div className="font-bold text-xs">
            Posted by {submission?.user?.name}
          </div>
        </div>
      }
      hoverable
      extra={
        <DeleteSubmissionButton className="text-lg" submission={submission} />
      }
    >
      <div className="flex flex-col">
        {submission.imageUrl ? (
          <img className="w-full" src={submission.imageUrl} />
        ) : (
          <img className="w-full" src={NoImage} />
        )}
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2">
              <LikeOutlined className="text-lg" />
              <div>{upvotes}</div>
            </div>
            <div className="flex flex-row gap-2">
              <LikeOutlined className="text-lg rotate-180 transform -scale-x-100 mt-1" />
              <div>{downvotes}</div>
            </div>
          </div>
          <div className="font-bold  ml-auto">
            {new Date(submission?.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Card>
  );
};
