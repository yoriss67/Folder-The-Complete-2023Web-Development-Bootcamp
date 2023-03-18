const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200).se
    res.send('Hi');
})

app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});