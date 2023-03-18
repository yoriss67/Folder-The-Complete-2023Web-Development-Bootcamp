const express = require('express');
// 👩‍🎓nodeの中のものなので新規install必要なし
const https = require('node:https');

const app = express();


app.get('/', function (req, res) {



    // res.send('TCPコネクション上に「ストリーム」という仮想通信経路')
    // res.send('server is up and running')
})




app.listen(3000, function () {
    console.log('server is running on port 3000')
});