const express = require('express');
const router = express.Router();

const { getAgents, createAgent, getHubAgents } = require('../controller/agentController');

router.get('/', getAgents);
router.post('/create', createAgent);
router.get('/hub/:hub_id/', getHubAgents);

module.exports = router;
