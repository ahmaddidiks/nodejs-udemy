const express = require('express');

const app = express();

app.use( '/', (req, res, next) => {
    console.log('This always run!');
    next(); // Allow toi continue to the next midsleware
});

app.use( '/test', (req, res, next) => { // test page
    res.send("<h1> Test page </h1>");
})

app.use( '/', (req, res, next) => { // main page
    res.send("<h1> Hello from express </h1>");
})

app.listen(3000);

