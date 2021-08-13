const express = require('express');
const customersController = require('../controllers/customer.controller');
const router = express.Router();

router.post('/', customersController.searchCustomers);

module.exports = router;