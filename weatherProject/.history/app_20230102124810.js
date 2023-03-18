const express = require('express');

const app = express();


app.get('/', function (req, res) [
    req.sed('server is up and  running')
])


app.listen(3000, function () {
    console.log('server is running on port 3000')
});