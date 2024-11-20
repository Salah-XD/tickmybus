'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hub extends Model {
    /**
     * Helper method for defining associations.
     */
    static associate(models) {
      // A hub has many agents
      Hub.hasMany(models.Agent, {
        foreignKey: 'hub_id',
        as: 'agents',
      });
    }
  }

  Hub.init(
    {
      hub_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance_credit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Hub',
    }
  );

  return Hub;
};
