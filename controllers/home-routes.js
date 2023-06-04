const router = require('express').Router();
const { User, Recipe } = require('../models');
const withAuth = require('../utils/auth');
const axios = require("axios");
require('dotenv').config();
const ranQuery = require('../utils/query');

const recipe_id = process.env.RECIPE_ID;

const recipeAPIKey = process.env.RECIPE_API_KEY;

// const QUERY = ranQuery();
// console.log(QUERY);
router.get('/', async (req, res) => {
    try {
        const QUERY = ranQuery();
        console.log(QUERY);
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
       const recipeId = oneRecipe.uri.slice(-32)
       console.log(oneRecipe.uri.slice(-32));
        res.render('homepage',{ oneRecipe, recipeId, logged_in: req.session.logged_in });
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

router.get('/recipes', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            attributes: ['id', 'user_id', 'name', 'ingredients', 'url', 'img'],
            include: [
                {
                    model: User,
                    attributes: ['username']

        }
    ],
    where: {
        user_id: req.session.user_id
    }
    
    });

    const userData = await User.findByPk(req.session.user_id);

    const userRecipes = recipeData.map(recipe => recipe.get({ plain: true }));
    const user = userData.get({ plain: true});
    
    res.render('userRecipes', {
        userRecipes,
        user,
        logged_in: req.session.logged_in
    });
 } catch (err) {
    res.status(500).json(err);
 }
});

router.get('/meal-planner', withAuth, (req, res) => {
    res.render('mealPlanner');
})

module.exports = router;