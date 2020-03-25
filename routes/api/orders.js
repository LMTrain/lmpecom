const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

  // Matches with "/api/orders/:id"
  router.route("/")
    .get(ordersController.findAll)
    .post(ordersController.create);  

  
  

module.exports = router;
