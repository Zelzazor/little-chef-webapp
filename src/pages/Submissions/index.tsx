import { FC } from 'react';
import { SubmissionCard } from '../../features/submissions/components/submission-card/SubmissionCard';
import { mockedSubmissions } from '../../features/submissions/mocks/submission';

export const Submissions: FC = () => {
  return (
    <div>
      <div className="text-lg font-bold mb-4">Submissions</div>
      <div className="flex flex-row flex-wrap">
        {mockedSubmissions.map((submission) => {
          return (
            <SubmissionCard
              key={submission.id}
              className="mb-3 mr-3"
              submission={submission}
            />
          );
        })}
      </div>
    </div>
  );
};
