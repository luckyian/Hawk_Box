module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
    // Associating Post with comments
    // When an Post is deleted, also delete any associated comments
    Post.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Post;
};
