const express = require('express');

const app = express();

// app.get('/', (req, res,next) => {
//     // res.sendStatus(500);
//     // res.status(500).send('statusとsendStatusで異なることに注意');
//     // res.status(500).json({message: "Error"});
//     // 📄status(500)なくても変わらんけどocnsoleのerror消える
//     res.json({message: "Error"});
//     // 👩‍🎓send a file to the user to download
//     // res.download('server.js');
//     next();
// }, (req, res) => {

//     res.send('<h1>227の6:00くらいだよ</h1>')

// });


// 公式
// app.get('/', (req, res, next) => {
//     console.log('<h1>thvvvve response will be sent by the next function ...</h1>')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })


// https://qiita.com/syumiwohossu/items/f9ee317f31adc3ad387b
  app.get('/', preProcess1, preProcess2, mainProcess);
  function preProcess1(req, res, next) {
      console.log('１個目の前処理したよ！');
      next();
  }
  function preProcess2(req, res, next) {
      console.log('2個目の前処理したよ！');
    //   next();
  }
  function mainProcess(req, res) {
      res.send('メインの処理をしたよ!');
  }
  




app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});