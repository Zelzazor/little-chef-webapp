import { LoadingOutlined } from '@ant-design/icons';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { useRecipes } from '../../../features/recipes/hooks/useRecipes';
import { unescapeLineBreaks } from '../../../features/utility/functions/unescapeLineBreaks.util';

export const RecipeDetails = () => {
  const { id } = useParams();
  const { useGetRecipeById } = useRecipes();

  const { data: recipe, isLoading, isError } = useGetRecipeById(id ?? '');

  if (isError && !recipe) return <div>Recipe not found</div>;
  if (isLoading) return <LoadingOutlined />;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="flex flex-col mx-10">
      <h1 className="text-3xl font-bold">{recipe.name}</h1>
      <div className="flex gap-4">
        <div className="w-[32%]">
          <img src={recipe.imageUrl} className="w-full" />
        </div>
        <div className="flex flex-col flex-1">
          <h2>Ingredients</h2>
          {recipe.ingredients?.map((ingredient) => (
            <p key={ingredient.ingredient.id}>
              {ingredient.quantity} {ingredient.measure_unit}
              {' of '}
              {ingredient.ingredient.name}
            </p>
          ))}
          <h2>Steps</h2>
          <MDEditor.Markdown
            source={unescapeLineBreaks(recipe.recipeSteps)}
            className="bg-inherit"
          />
        </div>
      </div>
    </div>
  );
};
