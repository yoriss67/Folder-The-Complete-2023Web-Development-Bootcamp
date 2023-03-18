const express = require('express');
// 👩‍🎓nodeの中のものなので新規install必要なし
const https = require('node:https');

const app = express();


app.get('/', function (req, res) {

    // 
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=9587befcd671d9b68920184868fb6b5d&units=metric'
    https.get(url,function(response) {
        console.log(response)
    } )

    res.send('server is up and running')
})


app.listen(3000, function () {
    console.log('server is running on port 3000')
});