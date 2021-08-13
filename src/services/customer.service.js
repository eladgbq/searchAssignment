const ObjectsToCsv  = require('objects-to-csv');
const customersAccess = require('../data-access/customers.access');
const fs = require('fs');
const conf = require('../conf/conf');

let latestSearch;

/**
 * returns a path to a file with the search results
 * 
 * @param {*} start start date to search from
 * @param {*} end end date to search to
 * @returns 
 */
async function searchCustomers(start, end) {
    let searchRes = await customersAccess.getCustomersByTime(start, end);
    let searchResFilePath = await saveSearchToFile(searchRes);
    return searchResFilePath;
}

/**
 * returns path to saved search results file
 * 
 * @param {*} searchRes array of customers returned by the search
 */
async function saveSearchToFile(searchRes) {
    if(!latestSearch) {
        latestSearch = await getLatestSearch();
    }
    const csv = new ObjectsToCsv(searchRes);

    const filePath = conf.searchDirPath + '/' + conf.searchFilePrefix + latestSearch
    await csv.toDisk(filePath);
    return filePath;
}

function getLatestSearch() {
    return new Promise((resolve, reject) => {
        fs.readdir('../../' + conf.searchDirPath, (err, files) => {
            if(err) {
                reject(err);
            }
            if(files.length === 0) {
                resolve(1);
            }
            files = files.map(file => file.slice(conf.searchFilePrefix.length)).filter(file => !isNaN(file));
            resolve(Math.max(...files));
        });
    });
}

module.exports = {
    searchCustomers
}