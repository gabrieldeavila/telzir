"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("falemais", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      ddd_from: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      ddd_to: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("falemais");
  },
};
