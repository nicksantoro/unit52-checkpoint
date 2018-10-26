const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000







app.listen(port, () => {
    console.log(`the server is working on ${port}`)
})

module.export = app;