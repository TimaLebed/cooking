'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "book-comments" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/bookComments.json");
    const bookComments = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, bookComments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
