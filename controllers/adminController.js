
const adminHelper = require("../helpers/adminHelper");
const genericHelper = require("../helpers/genericHelper");



exports.addBlog = async (req, res, next) => {
  var model = req.body;
  try {

  var imageUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  model.blogImage = imageUrl;
     await  adminHelper.addBlog(model);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Blog Added",null);
}


/* User contact Requests */

exports.getContactRequests = async (req, res, next) => {
  var requests;
  try {
    requests =  await  adminHelper.getUserContactRequests();
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquests",requests);
}

exports.readContactRequests = async (req, res, next) => {
  const contactId = req.query.contactId;
  try {
      await  adminHelper.contactRequestRead(contactId);
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"",null);
}



/* App Calculator */

exports.addCategory = async (req, res, next) => {
  var model = req.body;
  try {

     await  adminHelper.addCategory(model);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Category Added",null);
}



exports.addSubCategory = async (req, res, next) => {
  var model = req.body;
  try {

    console.log(model);


  await  adminHelper.addSubCategory(model);

  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"SubCategory Added",null);
}
