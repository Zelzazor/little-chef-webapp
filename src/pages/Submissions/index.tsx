import { Pagination } from 'antd';
import { FC } from 'react';
import { SubmissionCard } from '../../features/submissions/components/submission-card/SubmissionCard';
import { useSubmissions } from '../../features/submissions/hooks/useSubmissions';

export const Submissions: FC = () => {
  const { useGetSubmissions } = useSubmissions();
  const { data } = useGetSubmissions();

  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold mb-4">Submissions</div>
      <div className="flex flex-row flex-wrap gap-3 justify-center mb-3">
        {data?.submissions.map((submission) => {
          return (
            <SubmissionCard
              key={submission.id}
              className="w-[32%] min-w-[350px] min-h-[350px]"
              submission={submission}
            />
          );
        })}
      </div>
      <Pagination
        className="mx-auto"
        defaultPageSize={12}
        pageSizeOptions={[12, 24, 48]}
        defaultCurrent={1}
        total={1000}
      />
    </div>
  );
};
