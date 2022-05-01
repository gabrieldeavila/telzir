"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "plans",
      [
        {
          plan: "basic",
          minutes: 30,
        },
        {
          plan: "premium",
          minutes: 60,
        },
        {
          plan: "standard",
          minutes: 120,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plans", null, {});
  },
};
