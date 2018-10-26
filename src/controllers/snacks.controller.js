const model = require('../models/snacks.model');

const fetchSnacks = (req, res, next) => {
    let fetcher = model.fetchSnacks()
    res.send(fetcher)
    
}

// findSnack
// createSnack
// editSnack
// deleteSnack

module.exports = {
    fetchSnacks
}