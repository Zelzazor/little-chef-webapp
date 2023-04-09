import { FC } from 'react';
import { SubmissionCard } from '../../features/submissions/components/submission-card/SubmissionCard';
import { mockedSubmissions } from '../../features/submissions/mocks/submission';

export const Submissions: FC = () => {
  return (
    <div>
      <div>
        {mockedSubmissions.map((submission) => {
          return <SubmissionCard key={submission.id} submission={submission} />;
        })}
      </div>
    </div>
  );
};
