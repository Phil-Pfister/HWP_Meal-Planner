const router = require('express').Router();
const { User, Recipe } = require('../../models');

// Delete a recipe
router.delete('/recipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (!recipe) {
      res.status(404).json({ message: 'No recipe found with this id' });
      return;
    }

    await recipe.destroy();

    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;