const express = require('express');
const search = require('./routes/search.routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/search', search);

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})