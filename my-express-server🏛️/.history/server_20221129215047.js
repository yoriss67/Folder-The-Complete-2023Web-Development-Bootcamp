// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6

const express = require('express');

const app = express();


// And this is a method that's provided by Express that allows us to specify what should happen when a browser gets in touch with our server and makes a get request.

//1⃣ location of the get request. = ROUTE
//2⃣ callbak function = ROOT
app.get('/', function(request, response) {
    // console.log(request)
    // console.log(2 + 5)
    response.send('<h1>227の6:00くらいだよ</h1>')

})

app.get('/contact', function(request, response) {
    response.send('Welcome to my contact')
    response.send('<body>')
})

// And this tells it to listen on a specific port for any HTTP requests that get sent to our server.
// server.listen(8080)でサーバーが待ち受け状態になります。
app.listen(3000, function() {
    console.log('これでrunされてる　on port 3000')
});


// 227 これだけでは表示できないからsome infoを送らないといけない