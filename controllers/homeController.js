const homeHelper = require("../helpers/homeHelper");
const genericHelper = require("../helpers/genericHelper");




/* add user Contact request */
exports.addUserRequest = async (req, res, next) => {
  const model = req.body;
  try {
     await  homeHelper.addContactRequest(model);

  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquest Added",null);
}


exports.getBlogs = async (req, res, next) => {
  var blogs;
  try {
    blogs = await  homeHelper.getBlogs();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"Blogs",blogs);

}


exports.getBlogById = async (req, res, next) => {
  var blogId = req.query.blogId;
  var blog;
  try {
      blog = await  homeHelper.getBlogDetails(blogId);
      if (blog == null) {
  genericHelper.jsonResponse(res,400,"Something Wrong",null);
      }

  } catch (error) {
  genericHelper.jsonResponse(res,400,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"",blog);
}


/* App Calculator */


exports.getCategories = async (req, res, next) => {
  var categories;
  try {
    categories = await  homeHelper.getCategories();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"Categories",categories);

}




exports.getappEstimation = async (req, res, next) => {
  const model = req.body;
  try {
     await  homeHelper.saveAppEstimation(model);

  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquest Added",null);
}


// exports.getSubCategories = async (req, res, next) => {
//   var subCategories;
//   try {
//     subCategories = await  homeHelper.getSubCategories();

//   } catch (error) {
//   genericHelper.jsonResponse(res,500,"bad request",error);

//   }
//   genericHelper.jsonResponse(res,200,"Sub Categories",subCategories);

// }
