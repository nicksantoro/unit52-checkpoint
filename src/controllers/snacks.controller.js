// controller is the water/server
// controller goes to chef - we want cheeseburger

const model = require('../models/snacks.model');

const fetchSnacks = (req, res, next) => {
    let fetcher = model.fetchSnacks()
    res.send(fetcher)
    
}

const findSnack = (req, res, next) => {
  let { id } = req.params
  let fetcher = model.findSnack(id)
//   console.log(fetcher)
  if(fetcher.error) {
      console.log("fetcher is error")
     next(fetcher)
     return
  }
  return res.status(200).json(fetcher)
  
}

const createSnack = (req, res, next) => {
    let newSnack = req.body
    let result = model.createSnack(newSnack)
    if(result.error) {
        console.log("creation in error")
       next(result)
       return
    }
    return res.status(200).json(result)
}



// findSnack
// createSnack
// editSnack
// deleteSnack

module.exports = {
    fetchSnacks,
    findSnack,
    createSnack
}