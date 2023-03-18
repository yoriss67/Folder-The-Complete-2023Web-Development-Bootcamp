// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6

const express = require('express');

const app = express();


// And this is a method that's provided by Express that allows us to specify what should happen when a browser gets in touch with our server and makes a get request.

//1⃣ location of the get request. = ROUTE
//2⃣ callback function = ROOT
app.get('/', function(req, res) {
    // console.log(req)
    // console.log(2 + 5)
    res.send('<h1>227の6:00くらいだよ</h1>')

})

app.get('/contact', function(req, res) {
    res.send('Contact me at: ioridemodemo@gmail.com')
    res.send('/index.html)

})

// 230 challenge
app.get('/about', function(req, res) {
    res.send('Welcome to my about')
    res.rea('./IMG_1873.jpg', (err, data) => {
        res.type('jpg');
        res.send(data)
    })
})

app.get('/hobbies', function(req, res) {
    res.send('<ul><li>Coffee</li><li>Coffee</li><ul>')
    
})


// And this tells it to listen on a specific port for any HTTP requests that get sent to our server.
// server.listen(8080)でサーバーが待ち受け状態になります。
app.listen(3000, function() {
    console.log('これでrunされてる　on port 3000')
});


// 227 これだけでは表示できないからsome infoを送らないといけない