import { Pagination } from 'antd';
import { FC, useState } from 'react';
import { SubmissionCard } from '../../features/submissions/components/submission-card/SubmissionCard';
import { useSubmissions } from '../../features/submissions/hooks/useSubmissions';
import { SubmissionFilters } from '../../features/submissions/types/get-submission';

export const Submissions: FC = () => {
  const [submissionFilters, setSubmissionFilters] = useState<SubmissionFilters>(
    { page: 1, pageSize: 12 },
  );
  const { useGetSubmissions } = useSubmissions();
  const { data } = useGetSubmissions(submissionFilters);

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
        pageSize={submissionFilters.pageSize}
        showSizeChanger
        defaultCurrent={submissionFilters.page}
        total={data?.pagination.totalItems}
        onChange={(page, pageSize) => {
          setSubmissionFilters({ ...submissionFilters, page, pageSize });
        }}
      />
    </div>
  );
};
