const model = require('../models/snacks.model');

const fetchSnacks = (req, res, next) => {
    let fetcher = model.fetchSnacks()
    res.send(fetcher)
    
}

const findSnack = (req, res, next) => {
  let { id } = req.params
  let fetcher = model.findSnack(id)
  res.send(fetcher)
  
}



// findSnack
// createSnack
// editSnack
// deleteSnack

module.exports = {
    fetchSnacks,
    findSnack
}