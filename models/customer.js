const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Customer = sequelize.define('customer', {
  customerId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: Sequelize.STRING,
  title: Sequelize.STRING,
  company: Sequelize.STRING,
  phone: Sequelize.STRING,
  startingDate: Sequelize.STRING,
  description: Sequelize.STRING,

});

module.exports = Customer;
