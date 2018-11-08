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
  if(fetcher.error) {
     next(fetcher)
     return
  }
  return res.status(200).json(fetcher) 
}

const createSnack = (req, res, next) => {
    let {body} = req
    let result = model.createSnack(newSnack)
    return res.status(200).json(result)
}

const updateSnack = (req, res, next) => {
    let {body} = req
    let {id} = req.params
    let result = model.updateSnack(body, id)
    return res.status(200).json(result)
}

const deleteSnack = (req, res, next) => {
    let id = req.params.id
    let result = model.deleteSnack(id)
    return res.status(200).json(result)
}

module.exports = {
    fetchSnacks,
    findSnack,
    createSnack,
    updateSnack,
    deleteSnack
}