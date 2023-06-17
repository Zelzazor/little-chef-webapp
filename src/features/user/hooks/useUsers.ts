// useUsers.ts

import { useQuery } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import { BasePaginationQueryDto } from '../types/base-pagination-query.dto';
import { GetAllUsersResponse } from '../types/get-all-users';

export const useUsers = () => {
  const { axios } = useAxios();
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

  return { useGetAllUsers };
};
