const router = require('express').Router();
const { User, Recipe } = require('../../models');

// api/recipe

//Displays one recipes details
router.get('/details/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id);
        
        const recipe = recipeData.get({ plain: true });
        // console.log(recipe.ingredients);
       recipe.ingredients = recipe.ingredients.split(',').join('\n');
        
        // console.log(recipe.ingredients);

        res.render('recipeDetails', {
            recipe,
            logged_in: req.session.logged_in
        });
        res.status(200);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Add Recipe to Meal Planner Page by Day
router.put('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.update(
            {
                name: req.body.name,
                ingredients: req.body.ingredients,
                url: req.session.url,
                img: req.body.img,
                day: req.body.day,
            },
            {
            where: {
                id: req.params.id
            }},
            );
        
        res.render('mealPlanner');
        res.status(200).json(recipeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;