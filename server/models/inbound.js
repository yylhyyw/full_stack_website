module.exports = (sequelize, DataTypes) => {
  let Inbound = sequelize.define(
    'inbounds',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.STRING,
      },
      warehouse: {
        type: DataTypes.STRING,
      },
      company: {
        type: DataTypes.STRING,
      },
      individual: {
        type: DataTypes.STRING
      },
      status:{
        type: DataTypes.INTEGER,
      },
      companyStatus: {
        type: DataTypes.INTEGER,
      }
    },
    {}
  );
  return Inbound;
};
