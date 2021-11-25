const router = require('express').Router();
const api = require("../controller/apiController")

router.get("/api/products" , api.getProducts );

router.get("/api/add_products" , api.addProducts );

router.get("/api/update_products" , api.updateProducts );

router.get("/api/delete_products" , api.deleteProducts );

module.exports = router;