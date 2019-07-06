

const Category = require("../models/app-category");
const SubCategory = require("../models/app-subcategory");





exports.allTableRealtions = () => {

  Category.hasMany(SubCategory, {as: 'subcategories', foreignKey: 'categoryId'});
  // SubCategory.belongsTo(Category, {as: 'categories', foreignKey: 'categoryId'});

}
