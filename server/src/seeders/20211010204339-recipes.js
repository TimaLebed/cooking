const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = fs.readFileSync("data/recipes.json");
    const recipes = JSON.parse(data);
    return queryInterface.bulkInsert("Recipes", recipes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  },
};
