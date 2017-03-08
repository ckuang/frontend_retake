"use strict";

module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define("Experience", {
    company: DataTypes.STRING,
    title: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Experience.belongsTo(models.Person)
      }
    }
  });

  return Experience;
};
