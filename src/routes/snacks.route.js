// route is the guider
// whenever app gets request to certain end point router will control how request
// reception only
// customer - requests cheesburger from waiter

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/snacks.controller')

router.get('/', ctrl.fetchSnacks)

router.get('/:id', ctrl.findSnack)

router.post('/', ctrl.createSnack)

router.put('/:id', ctrl.updateSnack)

router.delete('/:id', ctrl.deleteSnack)


module.exports = router;