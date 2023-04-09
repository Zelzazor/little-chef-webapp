import { Card } from 'antd';
import { FC } from 'react';
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
      className={`w-[500px] h-fit ${className ?? ''}`}
      title={submission?.recipe?.name}
      hoverable
    >
      <img className="w-full" src={submission.imageUrl} />
    </Card>
  );
};
