const express = require('express'); 
const router = express.Router(); 
const customerController = require('../controllers/customer'); 


router.get('/BoardAdd', customerController.postAddBoard);

router.post('/register', customerController.postAddUser);

router.post('/ListAdd', customerController.postAddList);

router.post('/CardAdd', customerController.postAddCard);

module.exports = router; 

// router.get('/', customerController.getIndex); 

// router.get('/products', customerController.getProducts); 

// router.get('/products/:productid', customerController.getProduct);

// router.get('/categories/:categoryid', customerController.getProduc);

// router.get('/cart', customerController.getCart); 

// router.post('/cart', customerController.postCart);  

// router.post('/delete-cartitem', customerController.postCartItemDelete);

// router.get('/orders', customerController.getOrders);

// router.post('/create-order', customerController.postOrder);

