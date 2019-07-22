module.exports = (sequelize, DataTypes) => {
  let userGroup = sequelize.define(
    'user-groups',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      creator: {
        type: DataTypes.STRING
      },
      member: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {}
  );
  return userGroup;
};
