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
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },

      last_name: {
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
