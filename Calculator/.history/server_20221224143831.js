const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.sendStatus(500);
    // res.status(500).send('statusとsendStatusで異なることに注意');
    // res.status(500).json({message: "Error"});
    // 📄status(500)なくても変わらんけどocnsoleのerror消える
    // res.json({message: "Error"});
    // 👩‍🎓send a file to the user to download
    res.download('server.js');
    /

    res.send('<h1>227の6:00くらいだよ</h1>')



})

app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});