const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/BoardAdd', adminController.postAddBoard);

router.post('/register', adminController.postAddUser);

router.post('/ListAdd', adminController.postAddList);

router.post('/CardAdd', adminController.postAddCard);

module.exports = router;

// router.get('/add-product', adminController.getAddProduct); 

// router.post('/add-product', adminController.postAddProduct); 

// router.get('/products/:productid', adminController.getEditProduct);

// router.post('/products', adminController.postEditProduct); 

// router.post('/delete-product', adminController.postDeleteProduct); 

     