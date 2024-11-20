const { Hub, Agent } = require('../db/models');

// Get all hubs with agents
const getHubs = async (req, res) => {
  try {
    const hubs = await Hub.findAll({
      include: [
        {
          model: Agent,
          as: 'agents',
          attributes: ['agent_name', 'agent_phonenumber', 'balance_credit'],
        },
      ],
    });
    res.status(200).json(hubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new hub
const createHub = async (req, res) => {
  const { hub_name, city, balance_credit } = req.body;
  try {
    const hub = await Hub.create({ hub_name, city, balance_credit });
    res.status(201).json(hub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getHubs, createHub };
