const customerService = require('../services/customer.service');

async function searchCustomers(req, res) {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    res.send(await customerService.searchCustomers(startDate, endDate));
}

module.exports = {
    searchCustomers
}