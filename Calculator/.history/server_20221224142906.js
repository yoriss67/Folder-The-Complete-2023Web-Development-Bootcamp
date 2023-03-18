const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.sendStatus(500);
    res.status(500).send('status');

})

app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});