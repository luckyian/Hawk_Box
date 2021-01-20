"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = process.env.JAWSDB_URL;

    return queryInterface.bulkInsert("Posts", [
      {
        id: 1,
        title: "Seahawks vs Washington",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        video: "https://www.youtube.com/embed/HOLAEKfqe4c",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        UserId: 1,
      },
      {
        id: 2,
        title: "Will Ferrell and Seahawks",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        video: "https://www.youtube.com/embed/dxFex73cPBA",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        UserId: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
