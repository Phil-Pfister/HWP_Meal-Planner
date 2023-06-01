const router = require('express').Router();
const { Recipe } = require('../models');

const axios = require("axios");
require('dotenv').config();


const recipe_id = process.env.RECIPE_ID;

const recipeAPIKey = process.env.RECIPE_API_KEY;

router.get('/', async (req, res) => {
    try {
        const QUERY = 'soup';
        const recipeData = await axios.get("https://api.edamam.com/search", {
            params: {
              q: QUERY,
              app_id: recipe_id,
              app_key: recipeAPIKey,
              random: true,
            },
          });

          const recipes = recipeData.data.hits;
          console.log(recipes);
          res.render('search', { recipes });
    } catch (err) {
        res.status.json(err);
    }
});

module.exports = router;