import { useQuery } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import { GetSubmissionsResponse } from '../types/get-submission';

export const useSubmissions = () => {
  const { axios } = useAxios();
  const URL = '/submission';

  const useGetSubmissions = () =>
    useQuery('submission', async () => {
      const response = await axios.get<GetSubmissionsResponse>(URL);
      const { data } = response;
      const { data: submissions, pagination } = data;
      return { submissions, pagination };
    });

  return { useGetSubmissions };
};
