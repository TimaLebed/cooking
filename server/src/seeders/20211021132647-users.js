"use strict";

const fs = require("fs");
let tableModel = { schema: "app", tableName: "users" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/users.json");
    const users = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  },
};
