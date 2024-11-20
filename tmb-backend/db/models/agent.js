'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     */
    static associate(models) {
      // An agent belongs to a hub
      Agent.belongsTo(models.Hub, {
        foreignKey: 'hub_id',
        as: 'hub',
      });
    }
  }

  Agent.init(
    {
      agent_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agent_phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      balance_credit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      hub_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Agent',
    }
  );

  return Agent;
};
