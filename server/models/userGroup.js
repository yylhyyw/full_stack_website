module.exports = (sequelize, DataTypes) => {
  let userGroup = sequelize.define(
    'userGroups',
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
        type: DataTypes.TEXT,
        allowNull: false
      },
    },
    {}
  );
  return userGroup;
};
