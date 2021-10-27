"use strict";

const fs = require("fs");
let tableModel = { schema: "app", tableName: "reports" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/reports.json");
    const reports = JSON.parse(data);
    return queryInterface.bulkInsert(tableModel, reports, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  },
};
