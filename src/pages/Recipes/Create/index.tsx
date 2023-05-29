import { FC, FormEvent, useEffect, useState } from 'react';

import { PlusCircleOutlined } from '@ant-design/icons';
import MDEditor from '@uiw/react-md-editor';
import { Alert, Button, Input, Modal } from 'antd';
import { useQueryClient } from 'react-query';
import { IngredientList } from '../../../features/ingredients/components/ingredient-list/IngredientList';
import { useIngredients } from '../../../features/ingredients/hooks/useIngredients';
import { IngredientFilters } from '../../../features/ingredients/types/get-ingredients';
import { Ingredient } from '../../../features/ingredients/types/ingredient';
import { useRecipes } from '../../../features/recipes/hooks/useRecipes';
import { TagList } from '../../../features/tags/components/tag-list/TagList';
import { useTags } from '../../../features/tags/hooks/useTags';
import { TagFilters } from '../../../features/tags/types/get-tags';
import { Tag } from '../../../features/tags/types/tag';

export const CreateRecipe: FC = () => {
  const [ingredientFilters, setIngredientFilters] = useState<IngredientFilters>(
    {
      page: 1,
      pageSize: 12,
    },
  );
  const [tagFilters, setTagFilters] = useState<TagFilters>({
    page: 1,
    pageSize: 12,
  });
  const [markdownValue, setMarkdownValue] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<
    Partial<Ingredient>[]
  >([]);
  const [selectedTags, setSelectedTags] = useState<Partial<Tag>[]>([]);
  const { useCreateRecipe } = useRecipes();
  const { useGetIngredients, useCreateIngredient } = useIngredients();
  const { useGetTags } = useTags();
  const { data: tags } = useGetTags(tagFilters);
  const { data: ingredients } = useGetIngredients(ingredientFilters);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { mutate: createIngredient } = useCreateIngredient();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (selectedTags?.length) return;

    const difficulty = tags?.tags?.find(
      (t: Partial<Tag>) => t.name === 'Medium',
    );

    if (difficulty) {
      setSelectedTags([difficulty]);
    }
  }, [tags]);

  const onSuccess = () => {
    document.getElementById('content')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setVisible(true);
    setMarkdownValue('');
    setSelectedIngredients([]);
    setSelectedTags([]);
  };

  const { mutate: createRecipe } = useCreateRecipe(onSuccess);

  const addTag = (tag: Partial<Tag>) => {
    if (selectedTags.find((t: Partial<Tag>) => t.id === tag.id)) return;
    if (
      selectedTags.find(
        (t: Partial<Tag>) =>
          tag.tagType?.name === t.tagType?.name &&
          t.tagType?.name === 'Difficulty',
      )
    ) {
      setSelectedTags(
        selectedTags
          .filter((t: Partial<Tag>) => t.tagType?.name !== 'Difficulty')
          .concat(tag),
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (id: string) => {
    setSelectedTags(
      selectedTags.filter(
        (t: Partial<Tag>) => t.id !== id || t.tagType?.name === 'Difficulty',
      ),
    );
  };

  const addIngredient = (ingredient: Partial<Ingredient>) => {
    if (
      selectedIngredients.find(
        (i: Partial<Ingredient>) => i.id === ingredient.id,
      )
    )
      return;
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const removeIngredient = (id: string) => {
    setSelectedIngredients(
      selectedIngredients.filter((i: Partial<Ingredient>) => i.id !== id),
    );
  };

  const onSubmitIngredient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataResults = new FormData(e.currentTarget);
    const data = {
      name: dataResults.get('ingredient_name'),
    };

    createIngredient(data, {
      onSuccess: () => {
        setModalVisible(false);
        queryClient.invalidateQueries('ingredients');
      },
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataResults = new FormData(e.currentTarget);
    const data = {
      name: dataResults.get('name'),
      recipeSteps: markdownValue,
      recipeIngredients: selectedIngredients.map((i) => ({
        ingredientId: i.id,
        quantity: Number(dataResults.get(`quantity-${i.id}`)),
        measure_unit: dataResults.get(`measure_unit-${i.id}`),
      })),
      tags: selectedTags.map((t) => t.id),
    };

    const formData = new FormData();

    formData.append('data', JSON.stringify(data));
    formData.append('file', dataResults.get('file') as Blob);

    createRecipe(formData);
  };

  return (
    <div className="flex flex-col mx-10 gap-2">
      <h1 className="text-3xl">Create new Recipe</h1>
      {visible && (
        <Alert
          message="Successfully created recipe"
          type="success"
          closable
          onClose={() => setVisible(false)}
        />
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-2" id="submitForm">
        <label htmlFor="name">
          <div>Name</div>
        </label>
        <Input placeholder="Name" allowClear required name="name" id="name" />
        <label htmlFor="recipeSteps">
          <div>Steps</div>
        </label>
        <MDEditor
          value={markdownValue}
          onChange={(value) => setMarkdownValue(value ?? '')}
          id="recipeSteps"
        />
        <label htmlFor="file">
          <div>Image</div>
        </label>
        <Input type="file" accept="image/*" required name="file" id="file" />
        <IngredientList
          ingredients={ingredients?.ingredients ?? []}
          selectedIngredients={selectedIngredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          ingredientFilters={ingredientFilters}
          setIngredientFilters={setIngredientFilters}
          setModalVisible={setModalVisible}
          pagination={
            ingredients?.pagination ?? {
              totalItems: 0,
              totalPages: 0,
              page: 1,
              pageSize: 12,
            }
          }
        />
        <TagList
          tags={tags?.tags ?? []}
          selectedTags={selectedTags}
          addTag={addTag}
          removeTag={removeTag}
          tagFilters={tagFilters}
          setTagFilters={setTagFilters}
          pagination={
            tags?.pagination ?? {
              totalItems: 0,
              totalPages: 0,
              page: 1,
              pageSize: 12,
            }
          }
        />
        <Button
          type="primary"
          block
          icon={<PlusCircleOutlined />}
          htmlType="submit"
        >
          Create Recipe
        </Button>
      </form>
      <Modal
        title="Create Ingredient"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
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
    </div>
  );
};
