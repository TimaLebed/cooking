'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      comments: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      directions: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};