const router = require('express').Router();
const { Recipe } = require('../models');

const axios = require("axios");

require('dotenv').config();




const recipe_id = process.env.RECIPE_ID;

const recipeAPIKey = process.env.RECIPE_API_KEY;

router.get('/:id', async (req, res) => {

    try {
        
        const recipeData = await axios.get("https://api.edamam.com/search", {
            params: {
              q: req.params.id,
              app_id: recipe_id,
              app_key: recipeAPIKey,
              
            },
          });
          
          const recipes = recipeData.data.hits;
          
          recipes.forEach(recipe => {
           recipe.recipe.uri = recipe.recipe.uri.slice(-32)
          });
         
          res.render('search', { recipes, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;