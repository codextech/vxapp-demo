
const Blog = require("../models/blog");
const Contact = require("../models/contact");
const Category = require("../models/app-category");
const SubCategory = require("../models/app-subcategory");
const genericHelper = require("../helpers/genericHelper");

/* Contacts */

exports.getUserContactRequests = async () => {

  try {

    await Contact.findAll({
      order: [['createdAt', 'DESC']],
    },{where : {isRead : false}});

  } catch (error) {
    console.log(error);
  }
}



exports.contactRequestRead = async (contactId) => {

  try {

    await Contact.update({
      isRead : true
    },
      {
        where: { contactId: contactId }
      }
    );

  } catch (error) {
    console.log(error);
  }
}


/* Blog */

exports.addBlog = async (model) => {

  try {
     await Blog.create(model);
  } catch (error) {
     console.log(error);
  }
}


/* App Calculator */

exports.addCategory = async (model) => {

  try {
     await Category.create({
       categoryName : model.categoryName,
       color: model.color
     });
  } catch (error) {
     console.log(error);
  }
}


exports.addSubCategory = async (model) => {

  try {
     await SubCategory.create({
       categoryId: model.categoryId,
      subCategoryName : model.subCategoryName,
      color: model.color
    });

  } catch (error) {
     console.log(error);
  }
}
