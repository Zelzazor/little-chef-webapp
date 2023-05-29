import { PaginationParams } from '../../utility/types/pagination';
import { PaginatedResponse } from '../../utility/types/response';
import { Ingredient } from './ingredient';

export type GetIngredientRequest = {
  name?: string;
};

export type GetIngredientsParams = Partial<PaginationParams>;

export type IngredientFilters = GetIngredientRequest & GetIngredientsParams;

export type GetIngredientsResponse = PaginatedResponse<Ingredient[]>;
