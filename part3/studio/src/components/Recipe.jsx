import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://www.tasteofhome.com/author/valerie-goodrich/";
  let authorPhoto =
    "https://www.tasteofhome.com/wp-content/uploads/2023/12/Val-Goodrich-profile-photo.jpg?resize=295,295";
  let authorName = "Val Goodrich";

  return (
    <div>
      <img
        src={authorPhoto}
        alt="a photo of Val Goodrich"
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = ["sugar", "flour", "sauce", "mozzarella", "pepperoni"];
  let ingredientListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>{ingredientListItems}</ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Homemade Pizza</h1>
        <p>
          A piping hot pizza emerging from the oven fixed with all your favorite
          toppings is one of life&apos;s simple pleasures, and that&apos;s
          exactly what this recipe is all about. Our homemade pizza features a
          crispy-bottomed, chewy crust that serves as the perfect vessel for
          hearty tomato sauce, melty cheese and your most beloved &apos;za
          toppings.
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg?fit=700,700"
      alt="a yummy slice of pizza"
      className="imageUpdates"
      width="420px"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
