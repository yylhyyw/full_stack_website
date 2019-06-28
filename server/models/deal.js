module.exports = (sequelize, DataTypes) => {
  let Deal = sequelize.define(
    'deal',
    {
      deal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      deal_title: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      deal_link: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      deal_warehouse: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      deal_price: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true
      },
      deal_quantity: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true
      },
      deal_description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      deal_creator: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {}
  );
  return Deal;
};
