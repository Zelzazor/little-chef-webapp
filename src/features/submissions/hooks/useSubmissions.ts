import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import {
  DeleteSubmissionParams,
  DeleteSubmissionResponse,
} from '../types/delete-submission';
import {
  GetSubmissionsResponse,
  SubmissionFilters,
} from '../types/get-submission';

export const useSubmissions = () => {
  const { axios } = useAxios();
  const queryClient = useQueryClient();
  const URL = '/submission';

  const useGetSubmissions = (filters: SubmissionFilters) =>
    useQuery(
      ['submission', `submission-${filters.page}-${filters.pageSize}`],
      async () => {
        const { page, pageSize, ...body } = filters;

        const response = await axios.get<GetSubmissionsResponse>(URL, {
          params: {
            page: page,
            pageSize: pageSize,
          },
          data: body,
        });
        const { data } = response;
        const { data: submissions, pagination } = data;
        return { submissions, pagination };
      },
    );

  const useDeleteSubmission = ({ submissionId }: DeleteSubmissionParams) =>
    useMutation(
      async () => {
        const response = await axios.delete<DeleteSubmissionResponse>(
          `${URL}/${submissionId}`,
        );
        const { data } = response;
        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['submission']);
        },
      },
    );

  return { useGetSubmissions, useDeleteSubmission };
};
