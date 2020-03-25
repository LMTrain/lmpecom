const router = require("express").Router();
const userRoutes = require("./users");
const cartRoutes = require("./carts");
const ordersRoutes = require("./orders");
const saveditemsRoutes = require("./saveditems");


// User routes
router.use("/users", userRoutes);

// Item routes
router.use("/carts", cartRoutes);
router.use("/saveditems", saveditemsRoutes);
router.use("/orders", ordersRoutes);

module.exports = router;
