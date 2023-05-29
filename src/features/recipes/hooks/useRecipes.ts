import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';

import { GetRecipesResponse, RecipeFilters } from '../types/get-recipes';
import { Recipe } from '../types/recipe';

export const useRecipes = () => {
  const { axios } = useAxios();
  const queryClient = useQueryClient();
  const URL = '/recipes';

  const useGetRecipes = (filters: RecipeFilters) =>
    useQuery(
      [
        'recipes',
        `recipes-${filters.page}-${filters.pageSize}-${filters.name}`,
      ],
      async () => {
        const { page, pageSize, name, ...body } = filters;

        const response = await axios.post<GetRecipesResponse>(URL, body, {
          params: {
            page,
            pageSize,
            name,
          },
        });
        const { data } = response;
        const { data: recipes, pagination } = data;
        return { recipes: recipes, pagination };
      },
    );

  const useGetRecipeById = (id: string) =>
    useQuery(['recipe', id], async () => {
      const response = await axios.get<Recipe>(`${URL}/${id}`);
      const { data } = response;
      return data;
    });

  const useCreateRecipe = (onSuccess: () => void) =>
    useMutation({
      mutationFn: async (form: FormData) => {
        const response = await axios.post(`${URL}/create`, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'multipart/form-data',
          },
        });
        const { data } = response;
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['recipes']);
        onSuccess();
      },
    });

  return { useGetRecipes, useCreateRecipe, useGetRecipeById };
};
