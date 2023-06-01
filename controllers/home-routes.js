const router = require('express').Router();
const { Recipe } = require('../models');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(1);
        const recipe = recipeData.get({ plain: true});
        console.log(recipe);
        res.render('homepage', { recipe });
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

router.get('/recipe-details', async (req, res) => {
    try {
        res.render('recipeDetails');
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;