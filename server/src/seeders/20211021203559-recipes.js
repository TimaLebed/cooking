'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "recipes" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/recipes.json");
    const recipes = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, recipes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
