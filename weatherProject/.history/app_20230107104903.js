const express = require('express');
// 👩‍🎓nodeの中のものなので新規install
const https = require('node:https');

const app = express();


app.get('/', function (req, res) {
    res.send('server is up and running')
})


app.listen(3000, function () {
    console.log('server is running on port 3000')
});