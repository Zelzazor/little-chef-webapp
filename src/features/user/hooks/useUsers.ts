// useUsers.ts

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import { BasePaginationQueryDto } from '../types/base-pagination-query.dto';
import { GetAllUsersResponse } from '../types/get-all-users';

export const useUsers = () => {
  const { axios } = useAxios();
  const queryClient = useQueryClient(); // we use QueryClient for invalidating the cache
  const URL = '/user/all';

  const useGetAllUsers = (params: BasePaginationQueryDto) => {
    return useQuery(
      ['users', `users-${params.page}-${params.pageSize}`],
      async () => {
        const response = await axios.get<GetAllUsersResponse>(URL, { params });
        return response.data; // response.data includes `data` (array of users) and `pagination`
      },
    );
  };

  const useBanUserMutation = useMutation(
    ['users'],
    (id: string) => axios.post(`/user/ban/${id}`),
    {
      onSettled: () => {
        queryClient.invalidateQueries('users'); // invalidate all queries with the key 'users'
      },
    },
  );

  const useUnbanUserMutation = useMutation(
    ['users'],
    (id: string) => axios.post(`/user/unban/${id}`),
    {
      onSettled: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );

  return {
    useGetAllUsers,
    banUserMutation: useBanUserMutation,
    unbanUserMutation: useUnbanUserMutation,
  };
};
