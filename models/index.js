const User = require('./users');
const Recipe = require('./recipes');

User.hasMany(Recipe, {
    foreignKey: 'recipe_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {User, Recipe}