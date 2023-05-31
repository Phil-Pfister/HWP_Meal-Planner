const router = require('express').Router();
const { Recipe } = require('../models');
const apidata = require('../searchAPI.js');
const axios = require("axios");
require('dotenv').config();

const recipe_id = process.env.RECIPE_ID;

const recipeAPIKey = process.env.RECIPE_API_KEY;

const QUERY = "chicken";

router.get('/', async (req, res) => {
    try {
        const recipeData = await axios.get("https://api.edamam.com/search", {
            params: {
              q: QUERY,
              app_id: recipe_id,
              app_key: recipeAPIKey,
              random: true,
            },
          });
      
        let i = Math.floor(Math.random() * 10);
       const oneRecipe = recipeData.data.hits[i].recipe;
        // console.log('recipeData', oneRecipe);
        res.render('homepage',{ oneRecipe });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/sign-up', async (req, res) => {
    try {
        res.render('signup');
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;