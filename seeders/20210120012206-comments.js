"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = process.env.JAWSDB_URL;
    return queryInterface.bulkInsert("Comments", [
      {
        id: 1,
        body: "Wow what a great play",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        PostId: 1,
        UserId: 2,
      },
      {
        id: 2,
        body: "I love this video",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        PostId: 2,
        UserId: 1,
      },
      {
        id: 3,
        body: "Great blog post",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        PostId: 2,
        UserId: 3,
      },
      {
        id: 4,
        body: "This play is insaning!",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        PostId: 1,
        UserId: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
