import { Card } from 'antd';
import { FC } from 'react';
import NoImage from '../../../utility/assets/images/no-image.png';
import { Submission } from '../../types/submission';

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
      title={submission?.recipe?.name}
      hoverable
    >
      {submission.imageUrl ? (
        <img className="w-full" src={submission.imageUrl} />
      ) : (
        <img className="w-full" src={NoImage} />
      )}
    </Card>
  );
};
