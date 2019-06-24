module.exports = (sequelize, DataTypes) => {
  let Users_groups_mapping = sequelize.define(
    'users_groups_mapping',
    {
      user_email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      group_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    },
    {}
  );
  return Users_groups_mapping;
};
