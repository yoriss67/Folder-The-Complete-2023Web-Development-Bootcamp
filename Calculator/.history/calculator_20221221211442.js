// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6


const express = require('express');

const app = express();

app.get('/', function(req, res) {
    // console.log(req)
    // console.log(2 + 5)
    res.send('<h2>227の6:0vvvvvvvvvv0くらいだよ</h1>')

});

app.listen(1013, function() {
    console.log('これでrunされてる　on port 3000')
});

