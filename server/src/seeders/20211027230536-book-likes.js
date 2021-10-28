'use strict';

const fs = require("fs");
let tableModel = { schema: "app", tableName: "book-likes" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/bookLikes.json");
    const bookLikes = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, bookLikes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
