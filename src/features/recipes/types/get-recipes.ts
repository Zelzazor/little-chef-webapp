import { PaginationParams } from '../../utility/types/pagination';
import { PaginatedResponse } from '../../utility/types/response';
import { Recipe } from './recipe';

export type GetRecipesRequest = {
  name?: string;
  ingredients?: string[];
  tags?: string[];
};

export type GetRecipeParams = Partial<PaginationParams>;

export type RecipeFilters = GetRecipesRequest & GetRecipeParams;

export type GetRecipesResponse = PaginatedResponse<Recipe[]>;
