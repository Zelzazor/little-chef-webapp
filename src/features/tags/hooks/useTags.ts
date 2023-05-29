import { useQuery } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import { GetTagsResponse, TagFilters } from '../types/get-tags';

export const useTags = () => {
  const { axios } = useAxios();
  const URL = '/tags';

  const useGetTags = (filters: TagFilters) =>
    useQuery(
      ['tags', `tags-${filters.page}-${filters.pageSize}-${filters.name}`],
      async () => {
        const { page, pageSize, ...body } = filters;

        const response = await axios.post<GetTagsResponse>(URL, body, {
          params: {
            page,
            pageSize,
          },
        });
        const { data } = response;
        const { data: tags, pagination } = data;
        return { tags, pagination };
      },
    );

  return { useGetTags };
};
