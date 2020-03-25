const router = require("express").Router();
const saveditemsController = require("../../controllers/saveditemsController");


  router
    .route("/")
    .get(saveditemsController.findAll)
    .post(saveditemsController.create)
  
  router
  .route("/:id")
  .get(saveditemsController.findById) 
  .delete(saveditemsController.remove);
  
  

module.exports = router;
