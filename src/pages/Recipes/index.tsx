import { Button, Input, Pagination, Spin } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeCard } from '../../features/recipes/components/recipe-card/RecipeCard';
import { useRecipes } from '../../features/recipes/hooks/useRecipes';
import { RecipeFilters } from '../../features/recipes/types/get-recipes';

const { Search } = Input;

export const Recipes: FC = () => {
  const [recipeFilters, setRecipeFilters] = useState<RecipeFilters>({
    page: 1,
    pageSize: 12,
  });
  const navigate = useNavigate();
  const { useGetRecipes } = useRecipes();
  const { data, isLoading } = useGetRecipes(recipeFilters);

  return (
    <div className="flex flex-col">
      <div className="flex mb-4 mx-6 justify-between">
        <h1 className="text-3xl font-bold ">Recipes</h1>
        <div className="flex gap-2">
          <Search
            placeholder="Search by name"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={(value) => {
              setRecipeFilters({ ...recipeFilters, name: value });
            }}
          />
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('create')}
          >
            Create new recipe...
          </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-3 justify-center mb-3">
        {isLoading && <Spin size="large" />}
        {data?.recipes.map((submission) => {
          return (
            <RecipeCard
              key={submission.id}
              className="w-[32%] min-w-[350px] min-h-[350px]"
              recipe={submission}
            />
          );
        })}
      </div>
      <Pagination
        className="mx-auto"
        defaultPageSize={12}
        pageSizeOptions={[12, 24, 48]}
        pageSize={recipeFilters.pageSize}
        showSizeChanger
        defaultCurrent={recipeFilters.page ?? 1}
        total={data?.pagination.totalItems}
        onChange={(page, pageSize) => {
          setRecipeFilters({ ...recipeFilters, page, pageSize });
        }}
      />
    </div>
  );
};
