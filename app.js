const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000

const snacksRoute = require("./src/routes/snacks.route")

// GET /snacks
app.use('/snacks', snacksRoute);
// GET /snacks/:id
// POST /snacks
// PUT /snacks/:id
// DELETE /snacks/:id



app.listen(port, () => {
    console.log(`the server is working on ${port}`)
})

module.export = app;