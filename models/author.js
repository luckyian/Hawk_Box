module.exports = function (sequelize, DataTypes) {
  let Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts

    Author.hasMany(models.Post, {
      onDelete: "cascade"

    });
    

  };

  Author.associate = function (models) {
    // Associating Author with comments
    // When an Author is deleted, also delete any associated comments

    Author.hasMany(models.Comment, {
      onDelete: "cascade"

    });
  };


  return Author;
};
