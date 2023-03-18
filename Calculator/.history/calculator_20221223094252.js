// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res) {
    // console.log(req)
    // console.log(2 + 5)
    // res.send('<h2>227の6:0vvvvvvvvvv0くらいだよ</h2>')
    res.sendFile(__dirname + "/index.html");
    // 別のフォルダー
            // res.sendFile(__dirname + "/children/index.html");
});

app.post('/', function(req, res) {
//   var num1 = Number(req.body.num1);

//   var num2 = Number(req.body.num2);

//   var result = num1+num2;

//   res.send(String(result));

    res.send('Thanks for posting');
});









// 📄listenしないと、、ねえ、起きませんよ！
app.listen(3000, function() {
    console.log('これでrunされてる　on port 3000')
});

