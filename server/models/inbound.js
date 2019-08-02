module.exports = (sequelize, DataTypes) => {
  let Inbound = sequelize.define(
    'inbounds',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dealId: {
        type: DataTypes.INTEGER
      },
      product: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL(10,2)
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      warehouse: {
        type: DataTypes.STRING
      },
      company: {
        type: DataTypes.STRING
      },
      individual: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      companyStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      propose: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      proposeStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      publicWarehouse: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      bonus: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      awards: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {}
  );
  return Inbound;
};
