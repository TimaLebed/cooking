'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "books" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/books.json");
    const books = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, books, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
