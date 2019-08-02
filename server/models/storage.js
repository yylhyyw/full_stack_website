module.exports = (sequelize, DataTypes) => {
  let Storage = sequelize.define(
    'storages',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      creator: {
        type:DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  );
  return Storage;
};
