const customerAccess = require('./src/data-access/customers.access');
const parse = require('csv-parse/lib/sync')
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect(require('./src/conf/conf').dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

let data = parse(fs.readFileSync('./data.csv').toString(), {
    columns: true,
    skip_empty_lines: true
}).filter(doc => doc.createdAt !== '');

customerAccess.addCustomers(data);