"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "falemais",
      [
        {
          ddd_from: "011",
          ddd_to: "016",
          price: 1.9,
        },
        {
          ddd_from: "016",
          ddd_to: "011",
          price: 2.9,
        },
        {
          ddd_from: "011",
          ddd_to: "017",
          price: 1.7,
        },
        {
          ddd_from: "017",
          ddd_to: "011",
          price: 2.7,
        },
        {
          ddd_from: "011",
          ddd_to: "018",
          price: 0.9,
        },
        {
          ddd_from: "018",
          ddd_to: "011",
          price: 1.9,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("falemais", null, {});
  },
};
