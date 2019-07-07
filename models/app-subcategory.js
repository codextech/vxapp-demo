const Sequelize = require("sequelize");
const Category = require("../models/app-category");

const sequelize = require("../util/database");

const SubCategory = sequelize.define('subCategory', {
  subCategoryId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  subCategoryName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: Sequelize.STRING,

});


module.exports = SubCategory;
