"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = process.env.JAWSDB_URL;

    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "Joe Smith",
        password: "abc",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 2,
        username: "Travis Morrison",
        password: "abcd",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 3,
        username: "Aaron Barns",
        password: "abcd",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
