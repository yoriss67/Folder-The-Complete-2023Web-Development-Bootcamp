// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6

const express = require('express');

const app = express();

// And this tells it to listen on a specific port for any HTTP requests that get sent to our server.
// server.listen(8080)でサーバーが待ち受け状態になります。
app.listen(3000, function() {
    console.log('これでrunされてる　on port 3000')
});


// 227 これだけでは表示できないからsome infoをおくら