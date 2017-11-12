'use strict'

module.exports = (sequelize, DataTypes) => {
  const Summary = sequelize.define('Summary', {
    neighbourhood: {
      type: DataTypes.STRING
    },
    weekof: {
      type: DataTypes.INTEGER
    },
    monthof: {
      type: DataTypes.INTEGER
    },
    accommodates: {
      type: DataTypes.INTEGER
    },
    room_type: {
      type: DataTypes.STRING
    },
    Min_price: {
      type: DataTypes.DECIMAL(20,4),
    },
    Max_price: {
      type: DataTypes.DECIMAL(20,4),
    },
    Avg_price: {
      type: DataTypes.DECIMAL(20,4),
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });
  return Summary;
};