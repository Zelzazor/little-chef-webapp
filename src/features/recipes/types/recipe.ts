import { Ingredient } from '../../ingredients/types/ingredient';
import { Tag } from '../../tags/types/tag';
import { BaseEntity } from '../../utility/types/entity';

export type Recipe = BaseEntity & {
  name: string;
  imageUrl: string;
  recipeSteps: string;
  views: number;
  ingredients?: RecipeIngredients[];
  tags?: Tag[];
};

type RecipeIngredients = {
  ingredient: Ingredient;
  quantity: number;
  measure_unit: string;
};
