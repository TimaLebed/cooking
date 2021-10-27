'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "recipe-comments" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/recipeComments.json");
    const recipeComments = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, recipeComments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
