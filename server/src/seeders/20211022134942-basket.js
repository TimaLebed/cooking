"use strict";

const fs = require("fs");
let tableModel = { schema: "app", tableName: "basket" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/basket.json");
    const basket = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, basket, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  },
};
