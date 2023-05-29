import { Card } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import NoImage from '../../../utility/assets/images/no-image.png';
import { Recipe } from '../../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export const RecipeCard: FC<RecipeCardProps> = ({ recipe, className }) => {
  const navigate = useNavigate();
  return (
    <Card
      className={`h-fit ${
        className ?? ''
      } border-solid border-[1px] border-slate-200`}
      title={
        <div>
          <div>{recipe?.name}</div>
        </div>
      }
      hoverable
      onClick={() => {
        navigate(`/recipes/${recipe.id}`);
      }}
    >
      <div className="flex flex-col">
        {recipe.imageUrl ? (
          <img className="w-full" src={recipe.imageUrl} />
        ) : (
          <img className="w-full" src={NoImage} />
        )}
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row gap-5">
            <div className="font-bold  ml-auto">
              {new Date(recipe?.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
