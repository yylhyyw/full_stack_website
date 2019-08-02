module.exports = (sequelize, DataTypes) => {
  let Privilege = sequelize.define(
    'privilege',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      permission: {
        type: DataTypes.INTEGER,
      }
    },
    {}
  );
  return Privilege;
};
