const Sequelize = require("sequelize");
const SubCategory = require("../models/app-subcategory");

const sequelize = require("../util/database");

const Category = sequelize.define('category', {
  categoryId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: Sequelize.STRING,
});


module.exports = Category;
