'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "recipe-likes" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/recipeLikes.json");
    const recipeLikes = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, recipeLikes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
