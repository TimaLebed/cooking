'use strict';

let tableModel = { schema: "app", tableName: "basket-recipes" };
let tableModel_recipes = { schema: "app", tableName: "recipes" };
let tableModel_basket = { schema: "app", tableName: "basket" };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(tableModel, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        basket_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: tableModel_basket,
            key: "id",
            as: "basket_id",
          },
        },
        recipe_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: tableModel_recipes,
            key: "id",
            as: "recipe_id",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        }
      });
      await queryInterface.addIndex(tableModel, ['id'], { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableModel);
  }
};