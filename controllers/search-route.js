const router = require('express').Router();
const { Recipe } = require('../models');

const axios = require("axios");

require('dotenv').config();


const recipe_id = process.env.RECIPE_ID;

const recipeAPIKey = process.env.RECIPE_API_KEY;

router.get('/:id', async (req, res) => {

    try {
        console.log(req.params.id)
        const recipeData = await axios.get("https://api.edamam.com/search", {
            params: {
              q: req.params.id,
              app_id: recipe_id,
              app_key: recipeAPIKey,
              
            },
          });
          console.log(recipeData.data.hits);
          const recipes = recipeData.data.hits;
        
          
          res.render('search', { recipes });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;