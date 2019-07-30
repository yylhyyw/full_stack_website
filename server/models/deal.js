module.exports = (sequelize, DataTypes) => {
  let Deal = sequelize.define(
    'deals',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      products: {
        type: DataTypes.INTEGER
      },
      product_name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantityTaken: {
        type: DataTypes.INTEGER,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      service_tag: {
        type: DataTypes.BOOLEAN
      },
      public: {
        type: DataTypes.BOOLEAN
      },
      notify: {
        type: DataTypes.BOOLEAN
      },
      creator: {
        type: DataTypes.STRING
      },
      members: {
        type: DataTypes.TEXT
      },
      bonus: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  return Deal;
};
