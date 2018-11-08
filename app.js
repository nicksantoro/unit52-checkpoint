const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(morgan("dev"))

const snacksRoute = require("./src/routes/snacks.route")

app.use('/snacks', snacksRoute);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status).json(err)
})

app.listen(port, () => {
    console.log(`the server is working on ${port}`)
})

module.export = app;