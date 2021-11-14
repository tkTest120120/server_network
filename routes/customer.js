const router = require('express').Router();
const customerController = require('../controller/customerController');

router.get('/' , customerController.getLogin );

router.get('/list' , customerController.list );

router.post('/add' , customerController.save );

router.get('/update/:id' , customerController.edit );

router.post('/update/:id' , customerController.update );

router.get('/delete/:id' , customerController.delete );

router.get('/getdata' , customerController.getData );

router.get('/signup' , customerController.sign_up );

router.post('/signup' , customerController.addUSER );

router.get('/users' , customerController.getUsers );

router.get('/deleteuser/:id' , customerController.deleteUser );

router.get('/login' , customerController.getLogin );

router.post('/login' , customerController.postLogin );

router.get('/updateuser/:id' , customerController.editUSER );

router.post('/updateuser/:id' , customerController.updateUSER );

module.exports = router;