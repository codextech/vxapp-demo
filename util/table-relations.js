

const Category = require("../models/app-category");
const SubCategory = require("../models/app-subcategory");
const AppEstimate = require("../models/app-estimate");





exports.allTableRealtions = () => {

  Category.hasMany(SubCategory, {as: 'subcategories', foreignKey: 'categoryId'});
  // SubCategory.belongsTo(Category, {as: 'categories', foreignKey: 'categoryId'});


// ------- customer app & features
AppEstimate.belongsToMany(SubCategory, {through:'AppEstimateSubCategory', foreignKey: 'appEstimateId'} ) // Many to Many RelationShip
SubCategory.belongsToMany(AppEstimate, {through:'AppEstimateSubCategory',  foreignKey: 'subCategoryId'}) // Many to Many RelationShip
// -----------------


}
