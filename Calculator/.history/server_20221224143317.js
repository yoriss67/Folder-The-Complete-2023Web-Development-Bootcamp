const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.sendStatus(500);
    // res.status(500).send('statusとsendStatusで異なることに注意');
    // res.status(500).json({message: "Error"});
    // 📄status(500)なくても変わらん
    res.status(500).json({message: "Error"})


})

app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});