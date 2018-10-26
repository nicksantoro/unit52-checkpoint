const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/snacks.controller')

router.get('/', ctrl.fetchSnacks)

// router.get('/:id', ctrl.findSnack)
// router.post('/', ctrl.createSnack)
// router.put('/:id', ctrl.editSnack)
// router.del('/:id', ctrl.deleteSnack)

module.exports = router;