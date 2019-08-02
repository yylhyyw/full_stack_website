module.exports = (sequelize, DataTypes) => {
  let Subscription = sequelize.define(
    'subscriptions',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      individual: {
        type: DataTypes.STRING
      },
      company: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  return Subscription;
};
