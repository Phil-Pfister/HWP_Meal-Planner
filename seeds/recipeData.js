const { Recipe } = require('../models');

const recipeData = [
    {
        name: 'Thai Curry',
        ingredients: 'Chicken',
        directions: 'Cook chicken in a pot, add curry.',
    },
    {
        name: 'Burgers',
        ingredients: 'Beef',
        directions: 'Cook burger on the grill. Add toppings, enjoy!',
    },
    {
        name: 'Pizza',
        ingredients: 'Dough, pepperoni',
        directions: 'Make pizza dough, add pepperoni, cook!',
    },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;