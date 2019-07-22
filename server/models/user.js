const Product = require('../models').products;
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  return User;
};
