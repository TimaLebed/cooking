"use strict";

const fs = require("fs");
let tableModel = { schema: "app", tableName: "basket-recipes" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/basket-recipes.json");
    const BasketRecipes = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, BasketRecipes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  },
};
