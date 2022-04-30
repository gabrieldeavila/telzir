"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "falemais",
      [
        {
          from: "011",
          to: "016",
          price: 1.9,
        },
        {
          from: "016",
          to: "011",
          price: 2.9,
        },
        {
          from: "011",
          to: "017",
          price: 1.7,
        },
        {
          from: "017",
          to: "011",
          price: 2.7,
        },
        {
          from: "011",
          to: "018",
          price: 0.9,
        },
        {
          from: "018",
          to: "011",
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
