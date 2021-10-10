const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/users.json");
    const users = JSON.parse(data);
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

