'use strict';

let tableModel = { schema: 'app', tableName: 'books' };
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
        views: {
          type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING
        },
        author: {
          type: Sequelize.STRING
        },
        likes: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        img: {
          type: Sequelize.STRING
        },
        vegetarian: {
          type: Sequelize.BOOLEAN
        },
        without_milk: {
          type: Sequelize.BOOLEAN
        },
        without_eggs: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      });

      await queryInterface.addIndex(tableModel, ['id'], { transaction });
      await queryInterface.addIndex(tableModel, ['title'], { transaction });
      await queryInterface.addIndex(tableModel, ['user_id'], { transaction });

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