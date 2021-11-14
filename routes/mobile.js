const router = require('express').Router();
const customerController = require('../controller/customerController');
const mobileController = require('../controller/mobileController');

router.get('/mobile/users' , mobileController.getUsers );

router.get('/mobile/products' , mobileController.getProducts );

router.post('/mobile/products' , mobileController.addProducts );

router.post('/mobile/delete' , mobileController.deleteProduct );

router.post('/mobile/update' , mobileController.updateProduct );

router.post('/mobile/get' , mobileController.getSP );

router.post('/mobile/signup' , mobileController.dkUSER );

router.post('/mobile/carts' , mobileController.addCarts );

router.get('/mobile/carts' , mobileController.getCarts );

router.post('/mobile/hoadon' , mobileController.addHD );

router.get('/mobile/hoadon' , mobileController.getHD );

router.post('/mobile/carts/delete' , mobileController.deleteCarts );

module.exports = router;