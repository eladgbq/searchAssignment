const csv = require('csv');
const customersAccess = require('../data-access/customers.access');

/**
 * returns a path to a file with the search results
 * 
 * @param {*} start start date to search from
 * @param {*} end end date to search to
 * @returns 
 */
async function searchCustomers(start, end) {
    let searchRes = await customersAccess.getCustomersByTime(start, end);
    let searchResFilePath = saveSearchToFile(searchRes);
    return searchResFilePath;
}

/**
 * returns path to saved search results file
 * 
 * @param {*} searchRes array of customers returned by the search
 */
function saveSearchToFile(searchRes) {
    
}

module.exports = {
    searchCustomers
}