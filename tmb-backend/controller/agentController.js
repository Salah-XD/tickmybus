const { Agent, Hub } = require('../db/models');

// Get all agents
const getAgents = async (req, res) => {
  try {
    const agents = await Agent.findAll();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get agents by hub ID
const getHubAgents = async (req, res) => {
  const { hub_id } = req.params;
  try {
    const agents = await Agent.findAll({ where: { hub_id } });
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new agent
const createAgent = async (req, res) => {
  const { agent_name, agent_phonenumber, balance_credit, hub_id } = req.body;
  try {
    const hub = await Hub.findByPk(hub_id);
    if (!hub) return res.status(404).json({ error: 'Hub not found' });

    const agent = await Agent.create({ agent_name, agent_phonenumber, balance_credit, hub_id });
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAgents, getHubAgents, createAgent };
