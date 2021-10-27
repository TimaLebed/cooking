'use strict';

let tableModel = { schema: "app", tableName: "reports" };
let tableModel_recipes = { schema: "app", tableName: "recipes" };
let tableModel_books = { schema: "app", tableName: "books" };
let tableModel_users = { schema: "app", tableName: "users" };

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
        user_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: tableModel_users,
            key: "id",
            as: "user_id",
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
        book_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: tableModel_books,
            key: "id",
            as: "book_id",
          },
        },
        book_is_like: {
          type: Sequelize.BOOLEAN
        },
        recipe_is_like: {
          type: Sequelize.BOOLEAN
        },
        comment_book: {
          type: Sequelize.STRING
        },
        comment_recipe: {
          type: Sequelize.STRING
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
      await queryInterface.addIndex(tableModel, ['book_is_like'], { transaction });
      await queryInterface.addIndex(tableModel, ['recipe_is_like'], { transaction });
      await queryInterface.addIndex(tableModel, ['comment_book'], { transaction });
      await queryInterface.addIndex(tableModel, ['comment_recipe'], { transaction });

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