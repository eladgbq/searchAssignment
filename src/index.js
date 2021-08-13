const express = require('express');
const search = require('./routes/search.route');
const mongoose = require('mongoose');
mongoose.connect(require('./conf/conf').dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/search', search);

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})