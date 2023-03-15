var express = require('express');
var router = express.Router();

const etherControllers = require('../controller/ether');

 router.post('/getBalance', etherControllers.getBalance);
 router.post('/getTransactions', etherControllers.getTransactions);


module.exports = router;