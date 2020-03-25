const router = require("express").Router();
const cartsController = require("../../controllers/cartsController");

// Matches with "/api/books"
router.route("/")
  .get(cartsController.findAll)
  .post(cartsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(cartsController.findById) 
  .delete(cartsController.remove);

  router
  .route("/:id", )  
  .put(cartsController.update) 

module.exports = router;
