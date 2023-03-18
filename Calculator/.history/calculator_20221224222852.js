// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6


const express = require('express');

// 👩‍🎓So, by using Body Parser, we're able to parse the HTTP request that we get,
// const bodyParser = require('body-parser');

const app = express();

// bodyParserではなくexpress標準搭載なのでexpress
app.use(express.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // 別のフォルダー
    // res.sendFile(__dirname + "/children/index.html");
});

app.post('/', function (req, res) {
    // これはビデオで出てるだめパターン
    // 👩‍🎓it gets parsed as text
    //   var num1 =req.body.num1;
    //   var num2 =req.body.num2;
    //   var result = num1 + num2;

    // 数として認識できる  中で宣言する
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    //   res.send(String(result));

    // console.log(req.body.num1 + req.body.num2)
    res.send('Hi')
    res.send(`The result of calculation is ${result} <br> Hi`);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// CHALLENGE🔥🔥🔥🔥
app.post('/bmicalculator', function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    // BMI ＝ 体重kg ÷ (身長m)2
    let result = weight / (height * height);

    res.send(`Your BMI is ${result}`);
});











// 📄listenしないと、、ねえ、起きませんよ！
app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});