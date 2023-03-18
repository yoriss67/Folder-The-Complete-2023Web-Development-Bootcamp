// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6


const express = require('express');

const app = express();

app.get('/', function(req, res) {
    // console.log(req)
    // console.log(2 + 5)
    res.send('<h1>227の6:00くらいだよ</h1>')

})
