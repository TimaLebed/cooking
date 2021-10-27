"use strict";

const fs = require("fs");
let tableModel = { schema: "app", tableName: "basket-books" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/basket-books.json");
    const basketBooks = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, basketBooks, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  },
};
