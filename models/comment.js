module.exports = function (sequelize, DataTypes) {
  const Comment = sequelize.define("Comments", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  //   Comment.associate = function (models) {
  //     // We're saying that a Comment should belong to an User
  //     // A Comment can't be created without an User due to the foreign key constraint
  //   };
  Comment.associate = function (models) {
    Comment.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
    // We're saying that a Comment should belong to a Post
    // A Comment can't be created without a Post due to the foreign key constraint
    Comment.belongsTo(models.Posts, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Comment;
};
