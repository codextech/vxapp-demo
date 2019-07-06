

const Blog = require("../models/blog");
const Contact = require("../models/contact");
const Category = require("../models/app-category");
const SubCategory = require("../models/app-subcategory");



exports.addContactRequest = async (model) => {

  try {

     await Contact.create(model);

  } catch (error) {
     console.log(error);
  }
}


exports.getBlogs = async () => {

  var blogs;
  try {

    blogs = await Blog.findAll({
      order: [['blogId', 'DESC']],
    });

  } catch (error) {
      console.log(error);
  }
  return blogs;
}


exports.getBlogDetails = async (id) => {
  var blog;
  try {
    blog = await Blog.findOne({ where: {blogId: id} });

  } catch (error) {
      console.log(error);
  }
  return blog;
}



/* App Calculator */


exports.getCategories = async () => {

  var subCategories;
  try {

    subCategories = await Category.findAll({
      order: [['createdAt', 'DESC']],
      include: [{model: SubCategory, as: 'subcategories'}]
    });

  } catch (error) {
      console.log(error);
  }
  return subCategories;
}
