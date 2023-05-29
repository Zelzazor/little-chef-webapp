import { DeleteOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Ingredient } from '../../types/ingredient';

interface SelectedIngredientItemProps {
  ingredient: Partial<Ingredient>;
  removeIngredient: (id: string) => void;
}

export const SelectedIngredientItem = ({
  ingredient,
  removeIngredient,
}: SelectedIngredientItemProps) => {
  return (
    <div
      key={ingredient.id}
      className="flex gap-2 border border-[#33ca60] py-2  rounded-md px-2  hover:bg-slate-100 justify-between"
    >
      <div className="flex flex-col gap-2 py-10">
        <p className="text-lg font-bold">{ingredient.name}</p>
        <div className="flex gap-2 items-center">
          <div>
            <label htmlFor={`quantity-${ingredient.id}`}>Quantity</label>
            <Input
              required
              type="number"
              id={`quantity-${ingredient.id}`}
              name={`quantity-${ingredient.id}`}
              className="mt-3"
            />
          </div>
          <div>
            <label htmlFor={`measure_unit-${ingredient.id}`}>
              Measure Unit
            </label>
            <Input
              required
              id={`measure_unit-${ingredient.id}`}
              name={`measure_unit-${ingredient.id}`}
              className="mt-3"
            />
          </div>
        </div>
      </div>
      <Button
        danger
        type="primary"
        icon={<DeleteOutlined />}
        onClick={() => removeIngredient(ingredient.id ?? '')}
      />
    </div>
  );
};
