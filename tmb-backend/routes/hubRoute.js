const express = require('express');
const router = express.Router();

const { getHubs, createHub } = require('../controller/hubController');

router.get('/', getHubs);
router.post('/create', createHub);

module.exports = router;
