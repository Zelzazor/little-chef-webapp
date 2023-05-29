import { useMutation, useQuery } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import {
  GetIngredientsResponse,
  IngredientFilters,
} from '../types/get-ingredients';

export const useIngredients = () => {
  const { axios } = useAxios();
  const URL = '/ingredient';

  const useGetIngredients = (filters: IngredientFilters) =>
    useQuery(
      [
        'ingredients',
        `ingredients-${filters.page}-${filters.pageSize}-${filters.name}`,
      ],
      async () => {
        const { page, pageSize, ...body } = filters;

        const response = await axios.post<GetIngredientsResponse>(URL, body, {
          params: {
            page,
            pageSize,
          },
        });
        const { data } = response;
        const { data: ingredients, pagination } = data;
        return { ingredients, pagination };
      },
    );

  const useCreateIngredient = () => {
    return useMutation({
      mutationFn: async (form: { name: FormDataEntryValue | null }) => {
        const response = await axios.post(`${URL}/create`, form);
        const { data } = response;
        return data;
      },
    });
  };

  return { useGetIngredients, useCreateIngredient };
};
