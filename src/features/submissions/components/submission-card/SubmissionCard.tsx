import { Card } from 'antd';
import { FC } from 'react';
import { Submission } from '../../types/submission';

interface SubmissionCardProps {
  submission: Submission;
}

export const SubmissionCard: FC<SubmissionCardProps> = ({ submission }) => {
  return (
    <Card title={submission?.recipe?.name} hoverable>
      <img src={submission.imageUrl} />
    </Card>
  );
};
