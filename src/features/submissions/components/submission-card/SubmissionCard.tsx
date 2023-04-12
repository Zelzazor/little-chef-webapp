import { Card } from 'antd';
import { FC } from 'react';
import NoImage from '../../../utility/assets/images/no-image.png';
import { Submission } from '../../types/submission';
import { DeleteSubmissionButton } from '../delete-submission-button/DeleteSubmissionButton';

interface SubmissionCardProps {
  submission: Submission;
  className?: string;
}

export const SubmissionCard: FC<SubmissionCardProps> = ({
  submission,
  className,
}) => {
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
        <div className="flex flex-row justify-between mt-3 ml-auto">
          <div className="font-bold">
            {new Date(submission?.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Card>
  );
};
