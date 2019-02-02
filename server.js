const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3001);

app.get('/root', (req, res) => {
    res.send('Root Page')
})

app.listen(3001, () => {
console.log('ready on http://localhost:3001')
})