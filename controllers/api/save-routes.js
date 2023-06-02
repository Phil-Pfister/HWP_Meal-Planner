const router = require('express').Router();
const { User, Recipe } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const recipeData = Recipe.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(recipeData)
    } catch {
    res.status(400).json(err);
    }
});


module.exports = router;