const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send({"message": "pong"})
})

app.listen(3000, () => {console.log("porta 3000 ligada")});