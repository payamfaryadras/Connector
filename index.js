const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res) => {
    console.log(req.body)
    res.send("HomePage! Hello World.")
})

app.listen(3000, () => console.log('listening on port 3000')); // new