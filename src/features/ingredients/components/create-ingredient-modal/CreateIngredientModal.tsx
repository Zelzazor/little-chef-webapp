import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal } from 'antd';

interface CreateIngredientModalProps {
  ingredientModalVisible: boolean;
  setIngredientModalVisible: (visible: boolean) => void;
  onSubmitIngredient: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const CreateIngredientModal = ({
  ingredientModalVisible,
  setIngredientModalVisible,
  onSubmitIngredient,
}: CreateIngredientModalProps) => {
  return (
    <Modal
      title="Create Ingredient"
      open={ingredientModalVisible}
      onCancel={() => setIngredientModalVisible(false)}
      closable
      footer={null}
    >
      <form
        onSubmit={onSubmitIngredient}
        className="flex flex-col gap-2"
        id="submitIngredientForm"
      >
        <label htmlFor="ingredient_name">Name</label>
        <Input
          placeholder="Name"
          allowClear
          required
          name="ingredient_name"
          id="ingredient_name"
        />
        <Button
          type="primary"
          block
          icon={<PlusCircleOutlined />}
          htmlType="submit"
        >
          Create Ingredient
        </Button>
      </form>
    </Modal>
  );
};
