module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      product_condition: {
        type: DataTypes.STRING,
      },
      msrp: {
        type: DataTypes.STRING,
      },
      asin: {
        type: DataTypes.STRING,
      },
      upc: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING
      },
      note: {
        type: DataTypes.STRING
      },
      creator: {
        type: DataTypes.STRING
      },
      link: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  return Product;
};
