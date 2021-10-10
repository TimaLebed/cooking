const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/books.json");
    const books = JSON.parse(data);
    return queryInterface.bulkInsert("Books", books, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
