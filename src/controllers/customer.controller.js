const customerService = require('../services/customer.service');

async function searchCustomers(req, res) {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    res.send(`<a href="${await customerService.searchCustomers(startDate, endDate)}">download file</a>`);
}

module.exports = {
    searchCustomers
}