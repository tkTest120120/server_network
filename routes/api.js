const router = require('express').Router();
const api = require("../controller/apiController")

router.get("/api/products" , api.getProducts );

router.post("/api/add_products" , api.addProducts );

router.post("/api/update_products" , api.updateProducts );

router.post("/api/delete_products" , api.deleteProducts );

module.exports = router;