'use strict';

let tableModel = { schema: 'app', tableName: 'users' };


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
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        role: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        profile_title: {
          type: Sequelize.STRING
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
      await queryInterface.addIndex(tableModel, ['name'], { transaction });

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