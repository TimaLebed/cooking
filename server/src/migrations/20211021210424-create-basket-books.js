'use strict';

let tableModel = { schema: "app", tableName: "basket-books" };
let tableModel_books = { schema: "app", tableName: "books" };
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
        book_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: tableModel_books,
            key: "id",
            as: "book_id",
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