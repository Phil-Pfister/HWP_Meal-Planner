const axios = require("axios");

const recipe_id = "6252e4e1";
const food_id = "6fd7540d";
const recipeAPIKey = "75d2462707d2e87061c0473ed2b5f4c1";
const foodAPIKey = "346ca7292ee7fac939f47d84d08712a9";
const QUERY = "thai curry";

// const searchInput = document.getElementById('search-input');
// const QUERY = searchInput.value;

axios
  .all([
    axios.get("https://api.edamam.com/search", {
      params: {
        q: QUERY,
        app_id: recipe_id,
        app_key: recipeAPIKey,
      },
    }),
    axios.get("https://api.edamam.com/api/food-database/v2/parser", {
      params: {
        ingr: QUERY,
        app_id: food_id,
        app_key: foodAPIKey,
      },
    }),
  ])
  .then(
    axios.spread((recipeResponse, foodResponse) => {
      const recipes = recipeResponse.data.hits;
      const foods = foodResponse.data.hints;

      // Process and display the recipes
      console.log("Recipes:");
      recipes.forEach((recipe) => {
        const recipeLabel = recipe.recipe.label;
        const recipeUrl = recipe.recipe.url;
        console.log(`Recipe: ${recipeLabel}`);
        console.log(`URL: ${recipeUrl}`);
        console.log("---");
      });

      // Process and display the food items
      console.log("Food Items:");
      foods.forEach((food) => {
        const foodLabel = food.food.label;
        const foodNutrients = food.food.nutrients;
        console.log(`Food: ${foodLabel}`);
        console.log(`Nutrients: ${JSON.stringify(foodNutrients)}`);
        console.log("---");
      });
    })
  )
  .catch((error) => {
    console.error("Error retrieving data:", error);
  });

  module.exports = searchAPI;