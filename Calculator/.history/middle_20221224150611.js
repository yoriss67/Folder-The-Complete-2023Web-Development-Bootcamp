/*
 ドキュメントを元に作成
 https://qiita.com/aki3061/items/d05ca6cba19e308e0778
*/
var express = require('express')

// アプリケーションオブジェクトの作成
var app = express()

// ミドルウェアの定義
var myLogger = function (req, res, next) {
  console.log('LOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGEDLOGGED')
  // 次のミドルウェアへ
  next()
}

// ミドルウェアの読み込み
app.use(myLogger)

// パスを限定してミドルウェアを適用
app.get('/', function (req, res) {
  // ミドルウェア関数の連鎖はここでおしまい
  res.send('Hello World!')
})

app.listen(3000)