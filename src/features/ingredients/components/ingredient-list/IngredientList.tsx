import { Button, Pagination } from 'antd';
import Search from 'antd/es/input/Search';
import { Pagination as PaginationResponse } from '../../../utility/types/pagination';
import { IngredientFilters } from '../../types/get-ingredients';
import { Ingredient } from '../../types/ingredient';
import { SelectedIngredientItem } from '../selected-ingredient-item/SelectedIngredientItem';

interface IngredientListProps {
  ingredients: Partial<Ingredient>[];
  pagination: PaginationResponse;
  selectedIngredients: Partial<Ingredient>[];
  ingredientFilters: IngredientFilters;
  addIngredient: (ingredient: Partial<Ingredient>) => void;
  removeIngredient: (id: string) => void;
  setIngredientFilters: (filters: IngredientFilters) => void;
  setModalVisible: (visible: boolean) => void;
}

export const IngredientList = ({
  ingredients,
  selectedIngredients,
  addIngredient,
  removeIngredient,
  ingredientFilters,
  setIngredientFilters,
  setModalVisible,
  pagination,
}: IngredientListProps) => {
  return (
    <>
      <p className="m-0">Ingredients</p>
      <div className="flex gap-2 justify-center">
        <div
          className="flex flex-col justify-between gap-2 flex-1 bg-white rounded-xl shadow-md overflow-y-scroll p-2"
          style={{ height: 500 }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Search
                placeholder="Search by name"
                allowClear
                enterButton="Search"
                size="large"
                id="ingredientSearch"
                form="searchForm"
                onSearch={(value) => {
                  setIngredientFilters({ ...ingredientFilters, name: value });
                }}
              />
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  setModalVisible(true);
                }}
              >
                Add Ingredient
              </Button>
            </div>
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex items-center gap-2 border-2 border-[#ca3433] rounded-md cursor-pointer py-10 px-2 hover:bg-slate-100"
                onClick={() => addIngredient(ingredient)}
              >
                <div>{ingredient.name}</div>
              </div>
            ))}
          </div>

          <Pagination
            className="mx-auto"
            defaultPageSize={12}
            pageSizeOptions={[12, 24, 48]}
            pageSize={ingredientFilters.pageSize}
            showSizeChanger
            defaultCurrent={ingredientFilters.page ?? 1}
            total={pagination.totalItems}
            onChange={(page, pageSize) => {
              setIngredientFilters({ ...ingredientFilters, page, pageSize });
            }}
          />
        </div>
        <div
          className="flex flex-col  gap-2 flex-1 bg-white rounded-xl shadow-md overflow-y-scroll p-2"
          style={{ height: 500 }}
        >
          {selectedIngredients.map((ingredient) => (
            <SelectedIngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              removeIngredient={removeIngredient}
            />
          ))}
        </div>
      </div>
    </>
  );
};
