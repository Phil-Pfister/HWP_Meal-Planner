const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        ingredients: {
            type: DataTypes.TEXT,
        },
        url: {
            type: DataTypes.TEXT,
        },
        img: {
            type: DataTypes.TEXT,
        },
        day: {
            type: DataTypes.STRING,
        }

    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'recipe',
    }
);

module.exports = Recipe;