const Customer = require('../models/customer.model');

async function getCustomersByTime(start, end) {
    return await Customer.find({ createdAt: { $gte: parseInt(start), $lte: parseInt(end) } }).exec();
}

function addCustomers(customers) {
    return Customer.insertMany(customers);
}

module.exports = {
    getCustomersByTime,
    addCustomers
}