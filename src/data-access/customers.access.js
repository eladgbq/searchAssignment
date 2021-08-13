const Customer = require('../models/customer.model');

async function getCustomersByTime(start, end) {
    return await new Promise( (resolve, reject) => {
        Customer.find({ createdAt: { $gte: start, $lte: end } },  )
    });
}

function addCustomers(customers) {
    return Customer.collection.insert(customers);
}

module.exports = {
    getCustomersByTime
}