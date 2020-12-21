module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define("Post", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })
    Comment.associate = function (models) {
        // We're saying that a Comment should belong to an Author
        // A Comment can't be created without an Author due to the foreign key constraint
        Comment.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    Comment.associate = function (models) {
        // We're saying that a Comment should belong to a Post
        // A Comment can't be created without a Post due to the foreign key constraint
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Comment;
};

