import { ScaleImage } from '../../../features/guide/ScaleImage';

export const RecipesGuide = () => {
  return (
    <div className="mx-6 overflow-scroll">
      <h1 className="text-3xl font-bold">Recipes</h1>
      <p className="text-lg">
        On the recipes page, you can view all the recipes posted on the
        platform. You can also search for recipes and create new ones.
      </p>
      <ScaleImage src="/assets/guide/recipes/1.png" alt="Recipes Screen" />
      <p className="text-lg">
        To search for a recipe, enter the name of the recipe in the search bar.
        The recipes will be filtered when you click on the "Search" button.
      </p>
      <ScaleImage src="/assets/guide/recipes/2.png" alt="Search Recipes" />
      <p className="text-lg">
        To view more details about a recipe, click the recipe itself. You will
        be redirected to the recipe details page.
      </p>
      <ScaleImage src="/assets/guide/recipes/3.png" alt="Recipe Details" />
      <p className="text-lg">
        To create a new recipe, click the "Create new Recipe..." button. You
        will be redirected to the recipe creation page.
      </p>
      <ScaleImage src="/assets/guide/recipes/4.png" alt="Create Recipe" />
      <p className="text-lg">
        You can select the ingredients for the recipe by clicking on them. You
        must provide quantity and unit for each ingredient. You can search for
        ingredients by entering the name of the ingredient in the search bar.
        The ingredients will be filtered when you click on the "Search" button.
      </p>
      <ScaleImage src="/assets/guide/recipes/5.png" alt="Select Ingredients" />
      <p className="text-lg">
        You can also add a new ingredient by clicking the "Add Ingredient"
        button. You will be prompted to enter the name of the ingredient. Click
        on "Add Ingredient" to add the ingredient to the list of ingredients.
      </p>
      <ScaleImage src="/assets/guide/recipes/6.png" alt="Add Ingredient" />
      <p className="text-lg">
        You can also add a tag to the recipe by clicking the tag on the tag
        form. You can search for tags by entering the name of the tag in the
        search bar. The tags will be filtered when you click on the "Search"
        button.
      </p>
      <ScaleImage src="/assets/guide/recipes/7.png" alt="Select Tags" />
      <p className="text-lg">
        You can also add a new tag by clicking the "Add Tag" button. You will be
        prompted to enter the name of the tag. Click on "Add Tag" to add the tag
        to the list of tags.
      </p>
      <ScaleImage src="/assets/guide/recipes/8.png" alt="Add Tag" />
      <p className="text-lg">
        Click on create recipe to create the recipe. You will see a success
        message if the recipe was created successfully.
      </p>
      <ScaleImage src="/assets/guide/recipes/9.png" alt="Create Recipe" />
    </div>
  );
};
