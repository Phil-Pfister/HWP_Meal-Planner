const { Recipe } = require('../models');

const recipeData = [
    {
        name: 'Thai Curry',
        ingredients: 'Chicken',
        url: 'www.curry.com',
        img: 'https://theflavoursofkitchen.com/wp-content/uploads/2021/08/Thai-Red-Curry-1-720x1047.jpg',
        ingredients: 'curry paste, chicken' 
    },
    {
        name: 'Burgers',
        ingredients: 'Beef',
        url: 'www.burgers.com',
        img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_400/https://visitpearland.com/wp-content/uploads/2021/03/@killensburgers-400x397.jpg',
        ingredients: 'burger patty, burger buns' 
    },
    {
        name: 'Pizza',
        ingredients: 'Dough, pepperoni',
        url: 'www.pizza.com',
        img: 'https://www.allrecipes.com/thmb/9vcSuJHfuvou06XPXLON8VioLiM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg',
        ingredients: 'pizza dough, pepperoni' 
    },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;