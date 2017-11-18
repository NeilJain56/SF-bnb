'use strict';
module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define('Calendar', {
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    available: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Calendar.belongsTo(models.Listing, {
        });
      }
    }
  });
  return Calendar;
};