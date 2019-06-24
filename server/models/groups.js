module.exports = (sequelize, DataTypes) => {
  let Group = sequelize.define(
    'groups',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      group_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      group_desc: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  );
  return Group;
};
