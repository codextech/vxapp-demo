const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const homeController = require("../controllers/homeController");
var multer = require("multer");


// --------------multer file upload settings -------------
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const fileStorageWithoutChangnigName = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// -------------------------------------------------------




/* =============User Auth Routes============= */
// router.post("/login", authController.logIn);




/* =============Admin Routes============= */
router.post("/admin/blog",
multer({ storage: fileStorage }).any(),
  adminController.addBlog);

  router.post("/admin/blogimages",
multer({ storage: fileStorageWithoutChangnigName }).any());

router.post("/admin/category", adminController.addCategory);
router.delete("/admin/category", adminController.deleteCategory);
router.post("/admin/sub-category", adminController.addSubCategory);
router.get("/admin/customer-app", adminController.getCustomerAppRequests);





/* =============Main Routes============= */

router.post("/main/contact", homeController.addUserRequest);
router.get("/main/blog", homeController.getBlogs);
router.get("/main/blog-details", homeController.getBlogById);
router.get("/main/category", homeController.getCategories);
router.post("/main/app-estimate", homeController.getappEstimation);
// router.get("/main/sub-category", homeController.getSubCategories);



module.exports = router
