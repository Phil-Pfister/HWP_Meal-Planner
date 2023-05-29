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


module.exports = router;